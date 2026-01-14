# 3fs.no

## Running locally
First install
```bash
npm install
```

Then run
```bash
npm run dev
```

## Company Data Configuration

All company information (phone number, email, organization number, address, etc.) is centralized in the `/src/config/company.ts` file. This makes it easy to update company information in one place.

To update company information, edit the `companyData` object in `/src/config/company.ts`. The changes will automatically be reflected across all pages and components that use this data.
