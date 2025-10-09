# Google Customer Reviews Integration

## Overview
This integration implements Google Customer Reviews opt-in functionality on the order confirmation page. The integration is performance-optimized to load asynchronously without blocking the page render.

## Implementation Details

### Merchant Information
- **Merchant ID**: 5664063478
- **Store Name**: xGlobal Tents

### Files Modified/Created
1. **Component**: `/storefront/src/modules/order/components/google-customer-reviews/index.tsx`
   - Client-side component that loads Google's survey opt-in script
   - Handles dynamic order data integration
   - Performance optimized with async/defer loading

2. **Template**: `/storefront/src/modules/order/templates/order-completed-template.tsx`
   - Updated to include the GoogleCustomerReviews component

3. **Environment Config**: `/storefront/.env.local`
   - Added `NEXT_PUBLIC_GOOGLE_MERCHANT_ID=5664063478`

## Performance Optimizations
- Script loads with `async` and `defer` attributes
- Script only loads once per session (duplicate prevention)
- Error handling for failed script loads
- Minimal impact on page load time

## Data Mapping
The integration maps Medusa order data to Google's required fields:

| Google Field | Medusa Source | Description |
|-------------|---------------|-------------|
| merchant_id | Environment variable | Your Google Merchant ID |
| order_id | order.id | Unique order identifier |
| email | order.email | Customer email address |
| delivery_country | order.shipping_address.country_code | ISO country code |
| estimated_delivery_date | Calculated (order date + 10 days) | YYYY-MM-DD format |
| products (optional) | order.items | Array of GTINs if available |

## Testing Checklist

### Pre-deployment Testing
- [ ] Verify DOCTYPE is present in HTML output
- [ ] Confirm order confirmation page is on same domain as checkout
- [ ] Test with a real order (staging environment)
- [ ] Check browser console for any errors
- [ ] Verify opt-in widget appears after order completion
- [ ] Test with different country codes
- [ ] Verify email is properly passed
- [ ] Check estimated delivery date calculation

### Browser Testing
- [ ] Chrome (latest)
- [ ] Safari (latest)
- [ ] Firefox (latest)
- [ ] Mobile browsers (iOS Safari, Chrome Mobile)

### Performance Testing
- [ ] Measure page load time with/without integration
- [ ] Verify script loads asynchronously
- [ ] Check for render blocking

## Deployment Steps

1. **Environment Setup**
   ```bash
   # Add to production .env
   NEXT_PUBLIC_GOOGLE_MERCHANT_ID=5664063478
   ```

2. **Build and Deploy**
   ```bash
   npm run build
   npm run start
   ```

3. **Verification**
   - Place a test order
   - Verify opt-in widget appears
   - Check Google Merchant Center for integration status

## Troubleshooting

### Widget Not Appearing
1. Check browser console for errors
2. Verify merchant ID is correct
3. Ensure script is loading (Network tab)
4. Confirm order data is properly formatted

### Script Loading Issues
- Check Content Security Policy (CSP) settings
- Verify domain is whitelisted in Google Merchant Center
- Ensure HTTPS is enabled

### Data Issues
- Verify email format is valid
- Check country code is ISO 3166-1 alpha-2
- Ensure date format is YYYY-MM-DD

## Google Requirements Compliance

✅ **Shopping cart and checkout on same domain**
- Both are served from the same Next.js application

✅ **Confirmation page on your own domain**
- Order confirmation is at `/[countryCode]/order/confirmed/[id]`

✅ **DOCTYPE declaration**
- Next.js automatically includes proper DOCTYPE

✅ **Required fields implementation**
- All required fields are dynamically populated from order data

## Support
For issues or questions:
- Google Customer Reviews Help: https://support.google.com/merchants/answer/7188525
- Technical Implementation: Check browser console for detailed error messages

## Notes
- The integration uses a 10-day estimated delivery date (average of 7-14 days)
- GTINs are optional and will be included if available in product/variant metadata
- The script is loaded only once per page load to prevent duplicates