import { create } from "zustand";

const intialContacts = [
  {
    id: 1,
    name: "John",
    lastName: "Doe",
    city: "New York",
    country: "USA",
    email: "john.doe@example.com",
    number: "+1 123-456-7890",
  },
  {
    id: 2,
    name: "Emma",
    lastName: "Smith",
    city: "London",
    country: "UK",
    email: "emma.smith@example.co.uk",
    number: "+44 20 7946 0958",
  },
  {
    id: 3,
    name: "Liam",
    lastName: "Johnson",
    city: "Toronto",
    country: "Canada",
    email: "liam.johnson@example.ca",
    number: "+1 416-555-1234",
  },
  {
    id: 4,
    name: "Olivia",
    lastName: "Brown",
    city: "Sydney",
    country: "Australia",
    email: "olivia.brown@example.au",
    number: "+61 2 1234 5678",
  },
  {
    id: 5,
    name: "Noah",
    lastName: "Garcia",
    city: "Madrid",
    country: "Spain",
    email: "noah.garcia@example.es",
    number: "+34 91 123 4567",
  },
  {
    id: 6,
    name: "Ava",
    lastName: "Martinez",
    city: "Mexico City",
    country: "Mexico",
    email: "ava.martinez@example.mx",
    number: "+52 55 1234 5678",
  },
  {
    id: 7,
    name: "William",
    lastName: "Kim",
    city: "Seoul",
    country: "South Korea",
    email: "william.kim@example.kr",
    number: "+82 2-123-4567",
  },
];

export const contactsStore = create((set) => ({
  contacts: intialContacts,
  setContacts: (constacts) => set({ constacts }),
}));
