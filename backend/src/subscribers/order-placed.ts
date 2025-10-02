import { Modules } from '@medusajs/framework/utils'
import { INotificationModuleService, IOrderModuleService } from '@medusajs/framework/types'
import { SubscriberArgs, SubscriberConfig } from '@medusajs/medusa'
import { EmailTemplates } from '../modules/email-notifications/templates'

export default async function orderPlacedHandler({
  event: { data },
  container,
}: SubscriberArgs<any>) {
  const notificationModuleService: INotificationModuleService = container.resolve(Modules.NOTIFICATION)
  const orderModuleService: IOrderModuleService = container.resolve(Modules.ORDER)
  
  // Retrieve order with comprehensive relations to ensure we have all price data
  const order = await orderModuleService.retrieveOrder(data.id, { 
    relations: [
      'items', 
      'items.product', 
      'items.variant',
      'summary', 
      'shipping_address',
      'shipping_methods',
      'payment_collections',
      'payment_collections.payments'
    ] 
  })
  const shippingAddress = await (orderModuleService as any).orderAddressService_.retrieve(order.shipping_address.id)

  console.log('Order data for email:', {
    orderId: order.id,
    displayId: order.display_id,
    total: order.summary?.raw_current_order_total?.value,
    currencyCode: order.currency_code,
    itemsCount: order.items?.length,
    items: order.items?.map(item => ({
      id: item.id,
      title: item.title,
      quantity: item.quantity,
      unitPrice: item.unit_price,
      total: item.unit_price * item.quantity
    }))
  })

  try {
    await notificationModuleService.createNotifications({
      to: order.email,
      channel: 'email',
      template: EmailTemplates.ORDER_PLACED,
      data: {
        emailOptions: {
          replyTo: 'info@example.com',
          subject: 'Your order has been placed'
        },
        order,
        shippingAddress,
        preview: 'Thank you for your order!'
      }
    })
  } catch (error) {
    console.error('Error sending order confirmation notification:', error)
  }
}

export const config: SubscriberConfig = {
  event: 'order.placed'
}
