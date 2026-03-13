# Email Integration Setup Guide - Resend

## Overview
Your NatureNest Estates website now has full email integration using **Resend** - the best solution for transactional emails with a free tier of 100 emails/day, perfect for your limited use case.

## What's Been Implemented

### 1. **Email Service Files**
- `/lib/email.ts` - Email sending logic with Resend
- `/app/api/contact/route.ts` - API endpoint for form submissions
- `/components/contact-section.tsx` - Main contact form (updated)
- `/app/project/[id]/page.tsx` - Project enquiry form (updated)

### 2. **Features**
✅ Contact form sends data to `mr.pavan.kalyan.51@gmail.com`  
✅ Project enquiry forms also send to admin email  
✅ Automatic confirmation emails sent to users  
✅ Professional HTML email templates  
✅ Form validation (email, phone format)  
✅ Loading states and error handling  
✅ Success animations and messages  

## Setup Instructions

### Step 1: Get Your Resend API Key

1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account (no credit card needed)
3. Navigate to **API Keys** in the dashboard
4. Copy your API key

### Step 2: Add Environment Variable

1. In your v0 project, go to the **Vars** section (left sidebar)
2. Click "Add variable"
3. Set:
   - **Key**: `RESEND_API_KEY`
   - **Value**: Paste your API key from Resend
4. Click Save

### Step 3: Test the Integration

1. Open your website in preview
2. Go to the **Contact Form** section
3. Fill in the form with your details
4. Click "Send Message"
5. You should see a success message

### Step 4: Verify Emails

**Admin Inbox (mr.pavan.kalyan.51@gmail.com):**
- Will receive the form submission with all user details
- Professional HTML email with clear formatting
- Shows: Name, Email, Phone, Message, Timestamp

**User Inbox (their email):**
- Receives a confirmation email
- Shows company contact details
- Confirms we received their inquiry

## Email Limits

**Free Tier:**
- 100 emails per day
- Sufficient for limited business inquiries
- Upgrade anytime if you need more

## What Data Is Sent

### Contact Form Submission:
- Full Name
- Email Address
- Phone Number
- Message (optional)
- Submission Timestamp

### Project Enquiry:
- Full Name
- Email Address
- Phone Number
- Project Name (auto-filled in message)

## Troubleshooting

### Emails not sending?
1. Check that `RESEND_API_KEY` is added in Vars section
2. Verify the key is correct (copy-paste carefully)
3. Check browser console for errors (F12 → Console)
4. Ensure form validation passes

### Check Email Status:
1. Log into Resend dashboard
2. Go to **Emails** section
3. View delivery status and any errors

### Invalid Email Format?
- Ensure phone number has exactly 10 digits
- Email must be in valid format (name@domain.com)

## Customization

### Change Admin Email:
Edit `/lib/email.ts` line 12:
```typescript
to: 'your-email@example.com',  // Change this email address
```

### Customize Email Template:
Edit the HTML in `/lib/email.ts` for styling/content changes

### Add More Fields:
1. Update form in component
2. Add field to `ContactFormData` interface in `/lib/email.ts`
3. Include in email template

## Production Checklist

- [ ] Resend API key added to environment variables
- [ ] Test form submission works
- [ ] Verify admin email receives submissions
- [ ] Verify user receives confirmation email
- [ ] Test from multiple devices (mobile/desktop)
- [ ] Verify phone number validation works

## Support

For Resend issues: [Resend Docs](https://resend.com/docs)  
For questions: Check browser console (F12 → Console) for error messages

---

**Setup Time:** ~5 minutes  
**Status:** Ready to deploy once API key is added ✅
