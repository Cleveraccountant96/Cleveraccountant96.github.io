// Paste your queries here (or import them manually)
const GET_USER_INFO = `
  query {
    user {
      id
      login
      firstName
      lastName
      campus
      totalUp
      totalDown
    }
  }
`;

const GET_RESULTS_WITH_USER = `
  query {
    result {
      id
      grade
      createdAt
      object {
        id
        name
        type
      }
    }
  }
`;

const GET_OBJECT_BY_ID = `
  query GetObjectById($id: Int!) {
    object(where: { id: { _eq: $id }}) {
      id
      name
      type
    }
  }
`;

// Simple test helpers
function assert(condition, message) {
  if (!condition) {
    console.error("❌ FAIL:", message);
  } else {
    console.log("✅ PASS:", message);
  }
}

// Run tests
console.log("Running GraphQL query structure tests...\n");

assert(
  GET_USER_INFO.includes("user") && !GET_USER_INFO.includes("$"),
  "Normal query exists (GET_USER_INFO)"
);

assert(
  GET_RESULTS_WITH_USER.includes("result") &&
  GET_RESULTS_WITH_USER.includes("object {"),
  "Nested query exists (GET_RESULTS_WITH_USER)"
);

assert(
  GET_OBJECT_BY_ID.includes("($id: Int!)") &&
  GET_OBJECT_BY_ID.includes("_eq: $id"),
  "Query with arguments exists (GET_OBJECT_BY_ID)"
);

console.log("\nTests completed.");
