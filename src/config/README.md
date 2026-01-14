# Configuration Files

This directory contains centralized configuration files for the application.

## company.ts

Contains all company information in one centralized location including:

- Company name and description
- Contact information (phone, email)
- Organization number
- Address details
- Geographic coordinates
- Service areas
- Opening hours
- Website URL

### Usage

Import the config in your component:

```typescript
import { companyInfo } from '@/config/company'
```

Then use the properties as needed:

```typescript
// Phone number
<a href={`tel:${companyInfo.contact.phone.href}`}>
  {companyInfo.contact.phone.display}
</a>

// Email
<a href={`mailto:${companyInfo.contact.email}`}>
  {companyInfo.contact.email}
</a>

// Organization number
<p>Org.nr: {companyInfo.organization.number}</p>
```

### Benefits

- ✅ Single source of truth for company data
- ✅ Easy to update - change once, reflects everywhere
- ✅ Type-safe with TypeScript
- ✅ Prevents data duplication and inconsistencies
