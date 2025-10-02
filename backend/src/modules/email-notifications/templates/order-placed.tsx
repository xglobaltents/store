import { Text, Section, Hr } from '@react-email/components'
import * as React from 'react'
import { Base } from './base'
import { OrderDTO, OrderAddressDTO } from '@medusajs/framework/types'

export const ORDER_PLACED = 'order-placed'

// Currency formatting helper function - consistent with storefront formatting
const formatCurrency = (amount: number | string, currencyCode: string): string => {
  try {
    // Convert to number if it's a string
    const numericAmount = typeof amount === 'string' ? parseFloat(amount) : amount;
    
    // Medusa stores amounts in the smallest currency unit (e.g., cents for USD, fils for AED)
    // For most currencies including AED, amounts are stored as integers representing the smallest unit
    // So 35000 = 350.00 AED (divided by 100)
    
    const majorAmount = numericAmount / 100;
    const upperCurrencyCode = currencyCode.toUpperCase();
    
    // Use Intl.NumberFormat with currency style for proper formatting
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: upperCurrencyCode,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(majorAmount);
  } catch (error) {
    // Fallback formatting if currency code is invalid
    const numericAmount = typeof amount === 'string' ? parseFloat(amount) : amount;
    const majorAmount = numericAmount / 100;
    const upperCurrencyCode = currencyCode.toUpperCase();
    const formatted = new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
      useGrouping: true,
    }).format(majorAmount);
    
    return `${upperCurrencyCode} ${formatted}`;
  }
}

// Helper function to safely convert BigNumberValue to number
const toNumber = (value: any): number => {
  if (typeof value === 'number') return value;
  if (typeof value === 'string') return parseFloat(value) || 0;
  return 0;
}

interface OrderPlacedPreviewProps {
  order: OrderDTO & { display_id: string; summary: { raw_current_order_total: { value: number } } }
  shippingAddress: OrderAddressDTO
}

export interface OrderPlacedTemplateProps {
  order: OrderDTO & { display_id: string; summary: { raw_current_order_total: { value: number } } }
  shippingAddress: OrderAddressDTO
  preview?: string
}

export const isOrderPlacedTemplateData = (data: any): data is OrderPlacedTemplateProps =>
  typeof data.order === 'object' && typeof data.shippingAddress === 'object'

export const OrderPlacedTemplate: React.FC<OrderPlacedTemplateProps> & {
  PreviewProps: OrderPlacedPreviewProps
} = ({ order, shippingAddress, preview = 'Your order has been placed!' }) => {
  return (
    <Base preview={preview}>
      <Section>
        <Text style={{ fontSize: '24px', fontWeight: 'bold', textAlign: 'center', margin: '0 0 30px' }}>
          Order Confirmation
        </Text>

        <Text style={{ margin: '0 0 15px' }}>
          Dear {shippingAddress.first_name} {shippingAddress.last_name},
        </Text>

        <Text style={{ margin: '0 0 30px' }}>
          Thank you for your recent order! Here are your order details:
        </Text>

        <Text style={{ fontSize: '18px', fontWeight: 'bold', margin: '0 0 10px' }}>
          Order Summary
        </Text>
        <Text style={{ margin: '0 0 5px' }}>
          Order ID: {order.display_id}
        </Text>
        <Text style={{ margin: '0 0 5px' }}>
          Order Date: {new Date(order.created_at).toLocaleDateString()}
        </Text>
        <Text style={{ margin: '0 0 20px' }}>
          Total: {formatCurrency(toNumber(order.summary.raw_current_order_total.value), order.currency_code)}
        </Text>

        <Hr style={{ margin: '20px 0' }} />

        <Text style={{ fontSize: '18px', fontWeight: 'bold', margin: '0 0 10px' }}>
          Shipping Address
        </Text>
        <Text style={{ margin: '0 0 5px' }}>
          {shippingAddress.address_1}
        </Text>
        <Text style={{ margin: '0 0 5px' }}>
          {shippingAddress.city}, {shippingAddress.province} {shippingAddress.postal_code}
        </Text>
        <Text style={{ margin: '0 0 20px' }}>
          {shippingAddress.country_code}
        </Text>

        <Hr style={{ margin: '20px 0' }} />

        <Text style={{ fontSize: '18px', fontWeight: 'bold', margin: '0 0 15px' }}>
          Order Items
        </Text>

        <div style={{
          width: '100%',
          borderCollapse: 'collapse',
          border: '1px solid #ddd',
          margin: '10px 0'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            backgroundColor: '#f2f2f2',
            padding: '12px 8px',
            borderBottom: '1px solid #ddd'
          }}>
            <Text style={{ fontWeight: 'bold', flex: '2' }}>Item</Text>
            <Text style={{ fontWeight: 'bold', flex: '1', textAlign: 'center' }}>Quantity</Text>
            <Text style={{ fontWeight: 'bold', flex: '1', textAlign: 'right' }}>Total Price</Text>
          </div>
          {order.items.map((item) => (
            <div key={item.id} style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '12px 8px',
              borderBottom: '1px solid #ddd'
            }}>
              <Text style={{ flex: '2', paddingRight: '8px' }}>{item.title}</Text>
              <Text style={{ flex: '1', textAlign: 'center' }}>{item.quantity}</Text>
              <Text style={{ flex: '1', textAlign: 'right' }}>
                {formatCurrency(toNumber(item.unit_price) * item.quantity, order.currency_code)}
              </Text>
            </div>
          ))}
        </div>

        <Hr style={{ margin: '20px 0' }} />

        <div style={{ textAlign: 'right', marginTop: '20px' }}>
          <div style={{ fontSize: '16px', marginBottom: '8px' }}>
            <Text>Subtotal: {formatCurrency(toNumber(order.summary.raw_current_order_total.value) - toNumber(order.shipping_total) - toNumber(order.tax_total), order.currency_code)}</Text>
          </div>
          {(order.shipping_total && toNumber(order.shipping_total) > 0) && (
            <div style={{ fontSize: '16px', marginBottom: '8px' }}>
              <Text>Shipping: {formatCurrency(toNumber(order.shipping_total), order.currency_code)}</Text>
            </div>
          )}
          {(order.tax_total && toNumber(order.tax_total) > 0) && (
            <div style={{ fontSize: '16px', marginBottom: '8px' }}>
              <Text>Tax: {formatCurrency(toNumber(order.tax_total), order.currency_code)}</Text>
            </div>
          )}
          <div style={{ fontSize: '18px', fontWeight: 'bold', borderTop: '2px solid #ddd', paddingTop: '8px' }}>
            <Text>Total: {formatCurrency(toNumber(order.summary.raw_current_order_total.value), order.currency_code)}</Text>
          </div>
        </div>
      </Section>
    </Base>
  )
}

OrderPlacedTemplate.PreviewProps = {
  order: {
    id: 'test-order-id',
    display_id: '6',
    created_at: new Date('2025-09-29').toISOString(),
    email: 'maen.amer@example.com',
    currency_code: 'AED',
    items: [
      { 
        id: 'item-1', 
        title: 'Arch Tent- Arcum Tent', 
        product_title: 'Arch Tent- Arcum Tent', 
        quantity: 1, 
        unit_price: 35000 // 350.00 AED in cents
      }
    ],
    shipping_address: {
      first_name: 'Maen',
      last_name: 'Amer',
      address_1: 'Technopark - Mina Jebel Ali',
      city: 'Dubai',
      province: 'Dubayy',
      postal_code: '9038',
      country_code: 'ae'
    },
    summary: { raw_current_order_total: { value: 36750 } }, // 367.50 AED in cents
    shipping_total: 1500, // 15.00 AED shipping
    tax_total: 250 // 2.50 AED tax
  },
  shippingAddress: {
    first_name: 'Maen',
    last_name: 'Amer',
    address_1: 'Technopark - Mina Jebel Ali',
    city: 'Dubai',
    province: 'Dubayy',
    postal_code: '9038',
    country_code: 'ae'
  }
} as OrderPlacedPreviewProps

export default OrderPlacedTemplate
