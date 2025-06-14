// Sheety API configuration
export const SHEETY_CONFIG = {
  API_URL: process.env.SHEETY_API_URL || 'YOUR_SHEETY_API_ENDPOINT',
  PROJECT_NAME: 'cloudsania-docs-feedback',
  SHEET_NAME: 'feedback'
};

// Feedback schema in Google Sheets should have these columns:
// timestamp | pageUrl | rating | feedback 