import { faker } from "@faker-js/faker";

// Merchant categories with typical merchants
const merchants = [
  { name: "Whole Foods Market", category: "Grocery shopping" },
  { name: "Target", category: "Retail purchase" },
  { name: "Starbucks Coffee", category: "Coffee and beverages" },
  { name: "Shell Gas Station", category: "Fuel" },
  { name: "Amazon.com", category: "Online shopping" },
  { name: "Netflix", category: "Streaming subscription" },
  { name: "Chipotle Mexican Grill", category: "Restaurant" },
  { name: "CVS Pharmacy", category: "Pharmacy" },
  { name: "Planet Fitness", category: "Gym membership" },
  { name: "Uber", category: "Ride share" },
  { name: "Spotify", category: "Music subscription" },
  { name: "Home Depot", category: "Home improvement" },
  { name: "McDonald's", category: "Fast food" },
  { name: "Trader Joe's", category: "Grocery shopping" },
  { name: "Apple Store", category: "Electronics" },
  { name: "Costco", category: "Warehouse shopping" },
  { name: "Walgreens", category: "Pharmacy" },
  { name: "AT&T", category: "Phone bill" },
  { name: "Electric Company", category: "Utility payment" },
  { name: "Rent Payment", category: "Monthly rent" },
];

const paymentMethods = [
  "Debit Card",
  "Credit Card",
  "Bank Transfer",
  "Mobile Payment",
];
const statuses = ["completed", "pending", "completed", "completed"];
const accounts = ["Checking ****1234", "Savings ****5678", "Credit ****9012"];

// Set a seed for consistent data generation
faker.seed(12345);

const generateTransactions = (count = 30) => {
  const transactions = [];

  for (let i = 1; i <= count; i++) {
    const merchant = faker.helpers.arrayElement(merchants);
    const isDeposit = faker.number.int({ min: 1, max: 10 }) === 1;
    const amount = isDeposit
      ? parseFloat(faker.finance.amount({ min: 500, max: 3000, dec: 2 }))
      : -parseFloat(faker.finance.amount({ min: 5, max: 500, dec: 2 }));

    const date = faker.date.between({
      from: "2025-09-01T00:00:00Z",
      to: "2025-10-25T23:59:59Z",
    });

    const transaction = {
      id: faker.string.uuid(),
      date: date.toISOString(),
      merchant: isDeposit ? "Direct Deposit" : merchant.name,
      description: isDeposit ? "Payroll deposit" : merchant.category,
      amount: amount,
      account: faker.helpers.arrayElement(accounts),
      status: faker.helpers.arrayElement(statuses),
      paymentMethod: isDeposit
        ? "Bank Transfer"
        : faker.helpers.arrayElement(paymentMethods),
      referenceNumber: `REF-${date.getFullYear()}-${String(
        date.getMonth() + 1,
      ).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}-${String(
        faker.number.int({ min: 1, max: 999 }),
      ).padStart(3, "0")}`,
    };

    transactions.push(transaction);
  }

  // Sort by date (most recent first)
  transactions.sort((a, b) => +new Date(b.date) - +new Date(a.date));

  return transactions;
};

export const transactions = generateTransactions();
