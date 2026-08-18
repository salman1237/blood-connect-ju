export type Urgency = "critical" | "24h" | "planned";
export type RequestStatus = "open" | "donor_found" | "fulfilled";

export type BloodRequest = {
  id: string;
  bloodGroup: string;
  units: number;
  hospital: string;
  area: string;
  urgency: Urgency;
  postedAgo: string;
  requester: string;
  requesterRole: string;
  hall: string;
  verified: boolean;
  status: RequestStatus;
  note: string;
  contact: string;
  responders: { name: string; bloodGroup: string; hall: string; respondedAgo: string }[];
};

export const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

export const halls = [
  "Al-Beruni Hall",
  "Mir Mosharraf Hossain Hall",
  "Shaheed Salam-Barkat Hall",
  "Jahanara Imam Hall",
  "Pritilata Hall",
  "Bangamata Sheikh Fazilatunnesa Mujib Hall",
  "Nawab Faizunnesa Hall",
];

export const departments = [
  "Computer Science & Engineering",
  "Pharmacy",
  "Economics",
  "Public Health & Informatics",
  "Physics",
  "Bangla",
  "Environmental Sciences",
];

export const requests: BloodRequest[] = [
  {
    id: "req-1042",
    bloodGroup: "O-",
    units: 2,
    hospital: "Enam Medical College Hospital",
    area: "Savar",
    urgency: "critical",
    postedAgo: "12 min ago",
    requester: "Tanvir Hasan",
    requesterRole: "Student · 46th Batch",
    hall: "Al-Beruni Hall",
    verified: true,
    status: "open",
    note: "Road accident patient in emergency ward, surgery scheduled tonight.",
    contact: "Call · 01712-345678",
    responders: [
      { name: "Rifat Ahmed", bloodGroup: "O-", hall: "Al-Beruni Hall", respondedAgo: "6 min ago" },
      { name: "Sadia Islam", bloodGroup: "O-", hall: "Pritilata Hall", respondedAgo: "3 min ago" },
    ],
  },
  {
    id: "req-1041",
    bloodGroup: "B+",
    units: 1,
    hospital: "Savar Upazila Health Complex",
    area: "Savar Bazar",
    urgency: "24h",
    postedAgo: "48 min ago",
    requester: "Dr. Nusrat Jahan",
    requesterRole: "Faculty · Pharmacy",
    hall: "Pharmacy Dept.",
    verified: true,
    status: "donor_found",
    note: "Dengue patient, platelet count dropping. Needed before tomorrow noon.",
    contact: "WhatsApp · 01811-223344",
    responders: [
      { name: "Mahin Rahman", bloodGroup: "B+", hall: "Mir Mosharraf Hossain Hall", respondedAgo: "20 min ago" },
    ],
  },
  {
    id: "req-1040",
    bloodGroup: "A+",
    units: 3,
    hospital: "Dhaka Medical College Hospital",
    area: "Dhaka",
    urgency: "critical",
    postedAgo: "1 hr ago",
    requester: "Farhana Akter",
    requesterRole: "Student · 48th Batch",
    hall: "Jahanara Imam Hall",
    verified: false,
    status: "open",
    note: "Post-partum haemorrhage, relative of a JU staff member.",
    contact: "Call · 01933-556677",
    responders: [],
  },
  {
    id: "req-1039",
    bloodGroup: "AB-",
    units: 1,
    hospital: "Gonoshasthaya Samaj Vittik Medical College",
    area: "Savar",
    urgency: "planned",
    postedAgo: "3 hrs ago",
    requester: "Imran Kabir",
    requesterRole: "Staff · Registrar Office",
    hall: "Administration",
    verified: true,
    status: "open",
    note: "Scheduled thalassemia transfusion on Friday morning.",
    contact: "In-app chat",
    responders: [
      { name: "Zarin Tasnim", bloodGroup: "AB-", hall: "Nawab Faizunnesa Hall", respondedAgo: "1 hr ago" },
    ],
  },
  {
    id: "req-1038",
    bloodGroup: "O+",
    units: 2,
    hospital: "Enam Medical College Hospital",
    area: "Savar",
    urgency: "24h",
    postedAgo: "5 hrs ago",
    requester: "Shamim Reza",
    requesterRole: "Student · 47th Batch",
    hall: "Shaheed Salam-Barkat Hall",
    verified: true,
    status: "fulfilled",
    note: "Orthopedic surgery — donors confirmed, thank you everyone.",
    contact: "Call · 01677-889900",
    responders: [
      { name: "Arif Chowdhury", bloodGroup: "O+", hall: "Al-Beruni Hall", respondedAgo: "4 hrs ago" },
      { name: "Nabila Haque", bloodGroup: "O+", hall: "Pritilata Hall", respondedAgo: "4 hrs ago" },
    ],
  },
];

export type Donor = {
  id: string;
  name: string;
  bloodGroup: string;
  role: string;
  hall: string;
  department: string;
  lastDonation: string;
  eligibleInDays: number;
  donations: number;
  available: boolean;
};

export const donors: Donor[] = [
  { id: "d1", name: "Rifat Ahmed", bloodGroup: "O-", role: "Student", hall: "Al-Beruni Hall", department: "Computer Science & Engineering", lastDonation: "14 Feb 2026", eligibleInDays: 0, donations: 7, available: true },
  { id: "d2", name: "Sadia Islam", bloodGroup: "O-", role: "Student", hall: "Pritilata Hall", department: "Public Health & Informatics", lastDonation: "02 Jun 2026", eligibleInDays: 22, donations: 4, available: true },
  { id: "d3", name: "Mahin Rahman", bloodGroup: "B+", role: "Student", hall: "Mir Mosharraf Hossain Hall", department: "Economics", lastDonation: "11 Jan 2026", eligibleInDays: 0, donations: 5, available: true },
  { id: "d4", name: "Dr. Nusrat Jahan", bloodGroup: "A+", role: "Faculty", hall: "Pharmacy Dept.", department: "Pharmacy", lastDonation: "28 Apr 2026", eligibleInDays: 0, donations: 9, available: false },
  { id: "d5", name: "Zarin Tasnim", bloodGroup: "AB-", role: "Student", hall: "Nawab Faizunnesa Hall", department: "Physics", lastDonation: "19 Jul 2026", eligibleInDays: 68, donations: 2, available: false },
  { id: "d6", name: "Arif Chowdhury", bloodGroup: "O+", role: "Student", hall: "Al-Beruni Hall", department: "Bangla", lastDonation: "05 Mar 2026", eligibleInDays: 0, donations: 6, available: true },
  { id: "d7", name: "Imran Kabir", bloodGroup: "A-", role: "Staff", hall: "Administration", department: "Registrar Office", lastDonation: "22 May 2026", eligibleInDays: 11, donations: 3, available: true },
  { id: "d8", name: "Nabila Haque", bloodGroup: "O+", role: "Student", hall: "Pritilata Hall", department: "Environmental Sciences", lastDonation: "30 Dec 2025", eligibleInDays: 0, donations: 8, available: true },
  { id: "d9", name: "Shamim Reza", bloodGroup: "B-", role: "Student", hall: "Shaheed Salam-Barkat Hall", department: "Computer Science & Engineering", lastDonation: "17 Jun 2026", eligibleInDays: 37, donations: 1, available: false },
  { id: "d10", name: "Farhana Akter", bloodGroup: "AB+", role: "Student", hall: "Jahanara Imam Hall", department: "Economics", lastDonation: "Never donated", eligibleInDays: 0, donations: 0, available: true },
];

export const notifications = [
  { id: "n1", type: "match", title: "O- request near you", body: "Enam Medical College Hospital · 2 units · Critical", time: "12 min ago", unread: true },
  { id: "n2", type: "response", title: "Sadia Islam responded to your request", body: "She can donate O- today after 6 PM.", time: "35 min ago", unread: true },
  { id: "n3", type: "verified", title: "Your request was verified", body: "Request #1042 is now visible to all donors.", time: "1 hr ago", unread: false },
  { id: "n4", type: "fulfilled", title: "Request #1038 fulfilled", body: "2 donors confirmed at Enam Medical. Thank you!", time: "4 hrs ago", unread: false },
  { id: "n5", type: "eligibility", title: "You are eligible to donate again", body: "120 days have passed since your last donation.", time: "Yesterday", unread: false },
  { id: "n6", type: "camp", title: "Blood camp at JU Central Field", body: "Saturday, 10 AM – 4 PM. Organised by Badhan JU.", time: "2 days ago", unread: false },
];

export const leaderboard = [
  { rank: 1, name: "Al-Beruni Hall", donations: 148, change: "+12", members: 96 },
  { rank: 2, name: "Pritilata Hall", donations: 131, change: "+9", members: 88 },
  { rank: 3, name: "Mir Mosharraf Hossain Hall", donations: 118, change: "+6", members: 79 },
  { rank: 4, name: "Jahanara Imam Hall", donations: 97, change: "+4", members: 71 },
  { rank: 5, name: "Shaheed Salam-Barkat Hall", donations: 84, change: "+3", members: 65 },
  { rank: 6, name: "Nawab Faizunnesa Hall", donations: 72, change: "+2", members: 58 },
  { rank: 7, name: "Bangamata Sheikh Fazilatunnesa Mujib Hall", donations: 61, change: "+1", members: 52 },
];

export const donationHistory = [
  { id: "h1", date: "14 Feb 2026", hospital: "Enam Medical College Hospital", recipient: "Request #0912 · O-", units: 1 },
  { id: "h2", date: "26 Sep 2025", hospital: "Dhaka Medical College Hospital", recipient: "Request #0788 · O-", units: 1 },
  { id: "h3", date: "03 May 2025", hospital: "JU Medical Centre Camp", recipient: "Badhan JU Blood Camp", units: 1 },
  { id: "h4", date: "11 Dec 2024", hospital: "Savar Upazila Health Complex", recipient: "Request #0431 · O-", units: 1 },
  { id: "h5", date: "20 Jul 2024", hospital: "Enam Medical College Hospital", recipient: "Request #0298 · O-", units: 1 },
];

export const verifierQueue = [
  { id: "req-1043", bloodGroup: "A+", units: 3, hospital: "Dhaka Medical College Hospital", requester: "Farhana Akter", role: "Student · 48th Batch", submitted: "8 min ago", flag: "New account (2 days old)" },
  { id: "req-1044", bloodGroup: "B-", units: 1, hospital: "Popular Diagnostic, Savar", requester: "Rakib Hossain", role: "Student · 45th Batch", submitted: "22 min ago", flag: "No hospital document attached" },
  { id: "req-1045", bloodGroup: "O+", units: 2, hospital: "Enam Medical College Hospital", requester: "Sultana Parvin", role: "Staff · Library", submitted: "51 min ago", flag: "Duplicate of #1039?" },
  { id: "req-1046", bloodGroup: "AB+", units: 1, hospital: "Gonoshasthaya Nagar Hospital", requester: "Jubayer Alam", role: "Student · 47th Batch", submitted: "2 hrs ago", flag: "Verified phone · looks clean" },
];

export const adminUsers = [
  { name: "Rifat Ahmed", email: "rifat@juniv.edu", role: "Student", bloodGroup: "O-", status: "Active", donations: 7 },
  { name: "Dr. Nusrat Jahan", email: "nusrat.pharm@juniv.edu", role: "Faculty", bloodGroup: "A+", status: "Active", donations: 9 },
  { name: "Imran Kabir", email: "imran.reg@juniv.edu", role: "Staff", bloodGroup: "A-", status: "Active", donations: 3 },
  { name: "Sadia Islam", email: "sadia.phi@juniv.edu", role: "Verifier", bloodGroup: "O-", status: "Active", donations: 4 },
  { name: "Jubayer Alam", email: "jubayer@juniv.edu", role: "Student", bloodGroup: "AB+", status: "Pending", donations: 0 },
  { name: "Rakib Hossain", email: "rakib.eco@juniv.edu", role: "Student", bloodGroup: "B-", status: "Suspended", donations: 1 },
];

export const donorsByGroup = [
  { group: "O+", count: 412 },
  { group: "A+", count: 318 },
  { group: "B+", count: 296 },
  { group: "AB+", count: 121 },
  { group: "O-", count: 74 },
  { group: "A-", count: 58 },
  { group: "B-", count: 46 },
  { group: "AB-", count: 19 },
];

export const monthlyRequests = [
  { month: "Mar", fulfilled: 42, expired: 8 },
  { month: "Apr", fulfilled: 51, expired: 6 },
  { month: "May", fulfilled: 47, expired: 11 },
  { month: "Jun", fulfilled: 63, expired: 7 },
  { month: "Jul", fulfilled: 58, expired: 9 },
  { month: "Aug", fulfilled: 71, expired: 5 },
];

export const urgencyLabel: Record<Urgency, string> = {
  critical: "Critical",
  "24h": "Within 24h",
  planned: "Planned",
};
