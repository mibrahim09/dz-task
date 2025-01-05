import { MockedProductInternal } from './mocked-data.type';

export const PROVIDER1_MOCKED_DATA: MockedProductInternal[] = [
  {
    id: '01943884-c22e-7c64-be41-71f9c902eacf',
    name: 'Red Mystery Box',
    description: 'A valuable red mystery box can have many money',
    price: [100000, 500000],
    currency: 'USD',
    availability: 'AVAILABLE',
    lastUpdated: new Date(),
  },
  {
    id: 'b2c45671-a3d9-4ef8-9b12-8f7e3d901234',
    name: 'Blue Diamond Chest',
    description: 'Rare chest containing precious blue diamonds',
    price: [250000, 750000],
    currency: 'USD',
    availability: 'AVAILABLE',
    lastUpdated: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
  },
  {
    id: 'c3d56789-b4e0-5fg9-0c23-9g8h4i902345',
    name: 'Golden Treasure Vault',
    description: 'Ancient vault filled with golden artifacts',
    price: [500000, 1000000],
    currency: 'USD',
    availability: 'LIMITED',
    lastUpdated: new Date(Date.now() - 5 * 60 * 60 * 1000), // 5 hours ago
  },
  {
    id: 'd4e67890-c5f1-6gh0-1d34-0h9i5j903456',
    name: 'Emerald Fortune Box',
    description: 'Mystical box containing valuable emeralds',
    price: [150000, 450000],
    currency: 'USD',
    availability: 'AVAILABLE',
    lastUpdated: new Date(Date.now() - 1 * 60 * 60 * 1000), // 1 hour ago
  },
  {
    id: 'e5f78901-d6g2-7hi1-2e45-1i0j6k904567',
    name: 'Crystal Magic Chest',
    description: 'Enchanted chest with crystal formations',
    price: [300000, 800000],
    currency: 'USD',
    availability: 'SOLD_OUT',
    lastUpdated: new Date(Date.now() - 8 * 60 * 60 * 1000), // 8 hours ago
  },
  {
    id: 'f6g89012-e7h3-8ij2-3f56-2j1k7l905678',
    name: 'Ruby Secret Case',
    description: 'Mysterious case containing rare rubies',
    price: [200000, 600000],
    currency: 'USD',
    availability: 'AVAILABLE',
    lastUpdated: new Date(Date.now() - 3 * 60 * 60 * 1000), // 3 hours ago
  },
  {
    id: 'g7h90123-f8i4-9jk3-4g67-3k2l8m906789',
    name: 'Platinum Prize Box',
    description: 'Exclusive box with platinum rewards',
    price: [400000, 900000],
    currency: 'USD',
    availability: 'LIMITED',
    lastUpdated: new Date(Date.now() - 7 * 60 * 60 * 1000), // 7 hours ago
  },
  {
    id: 'h8i01234-g9j5-0kl4-5h78-4l3m9n907890',
    name: 'Sapphire Wonder Chest',
    description: 'Magnificent chest with sapphire treasures',
    price: [350000, 850000],
    currency: 'USD',
    availability: 'AVAILABLE',
    lastUpdated: new Date(Date.now() - 4 * 60 * 60 * 1000), // 4 hours ago
  },
  {
    id: 'i9j12345-h0k6-1lm5-6i89-5m4n0o908901',
    name: 'Diamond Elite Box',
    description: 'Premium box with exceptional diamond items',
    price: [600000, 1200000],
    currency: 'USD',
    availability: 'LIMITED',
    lastUpdated: new Date(Date.now() - 9 * 60 * 60 * 1000), // 9 hours ago
  },
  {
    id: 'j0k23456-i1l7-2mn6-7j90-6n5o1p909012',
    name: 'Pearl Mystery Collection',
    description: 'Luxurious collection of rare pearls',
    price: [450000, 950000],
    currency: 'USD',
    availability: 'AVAILABLE',
    lastUpdated: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6 hours ago
  },
  {
    id: 'k1l34567-j2m8-3no7-8k01-7o6p2q910123',
    name: 'Ancient Dragon Relic',
    description:
      'Mystical artifact with dragon engravings from a lost civilization',
    price: [50000, 150000, 300000, 500000],
    currency: 'USD',
    availability: 'LIMITED',
    lastUpdated: new Date(
      Date.now() - Math.floor(Math.random() * 10) * 60 * 60 * 1000,
    ),
  },
  {
    id: 'l2m45678-k3n9-4op8-9l12-8p7q3r911234',
    name: 'Celestial Star Box',
    description: 'Container infused with stardust and cosmic energy',
    price: [75000, 225000],
    currency: 'USD',
    availability: 'AVAILABLE',
    lastUpdated: new Date(
      Date.now() - Math.floor(Math.random() * 10) * 60 * 60 * 1000,
    ),
  },
  {
    id: 'm3n56789-l4o0-5pq9-0m23-9q8r4s912345',
    name: 'Phoenix Feather Collection',
    description: 'Rare collection of magical phoenix feathers',
    price: [125000, 250000, 375000],
    currency: 'USD',
    availability: 'SOLD_OUT',
    lastUpdated: new Date(
      Date.now() - Math.floor(Math.random() * 10) * 60 * 60 * 1000,
    ),
  },
  {
    id: 'n4o67890-m5p1-6qr0-1n34-0r9s5t913456',
    name: 'Volcanic Gem Chest',
    description: 'Heat-forged chest containing rare volcanic gems',
    price: [80000, 160000, 240000, 320000, 400000],
    currency: 'USD',
    availability: 'LIMITED',
    lastUpdated: new Date(
      Date.now() - Math.floor(Math.random() * 10) * 60 * 60 * 1000,
    ),
  },
  {
    id: 'o5p78901-n6q2-7rs1-2o45-1s0t6u914567',
    name: 'Frost Giant Treasure',
    description: 'Ancient nordic treasure chest from the frozen realms',
    price: [200000, 400000, 600000],
    currency: 'USD',
    availability: 'AVAILABLE',
    lastUpdated: new Date(
      Date.now() - Math.floor(Math.random() * 10) * 60 * 60 * 1000,
    ),
  },
  {
    id: 'p6q89012-o7r3-8st2-3p56-2t1u7v915678',
    name: 'Desert Mirage Box',
    description: 'Mysterious container with shifting sand patterns',
    price: [150000, 300000, 450000, 600000, 750000],
    currency: 'USD',
    availability: 'LIMITED',
    lastUpdated: new Date(
      Date.now() - Math.floor(Math.random() * 10) * 60 * 60 * 1000,
    ),
  },
  {
    id: 'q7r90123-p8s4-9tu3-4q67-3u2v8w916789',
    name: 'Ocean Pearl Vault',
    description: 'Deep sea vault containing rare ocean treasures',
    price: [175000],
    currency: 'USD',
    availability: 'AVAILABLE',
    lastUpdated: new Date(
      Date.now() - Math.floor(Math.random() * 10) * 60 * 60 * 1000,
    ),
  },
  {
    id: 'r8s01234-q9t5-0uv4-5r78-4v3w9x917890',
    name: 'Thunder Crystal Case',
    description: 'Energized case containing lightning-struck crystals',
    price: [250000, 500000, 750000, 1000000],
    currency: 'USD',
    availability: 'SOLD_OUT',
    lastUpdated: new Date(
      Date.now() - Math.floor(Math.random() * 10) * 60 * 60 * 1000,
    ),
  },
  {
    id: 's9t12345-r0u6-1vw5-6s89-5w4x0y918901',
    name: 'Moonlight Silver Chest',
    description: 'Enchanted chest that glows under moonlight',
    price: [100000, 200000, 300000],
    currency: 'USD',
    availability: 'AVAILABLE',
    lastUpdated: new Date(
      Date.now() - Math.floor(Math.random() * 10) * 60 * 60 * 1000,
    ),
  },
  {
    id: 't0u23456-s1v7-2wx6-7t90-6x5y1z919012',
    name: 'Forest Spirit Collection',
    description: 'Ancient woodland artifacts with natural magic',
    price: [125000, 250000],
    currency: 'USD',
    availability: 'LIMITED',
    lastUpdated: new Date(
      Date.now() - Math.floor(Math.random() * 10) * 60 * 60 * 1000,
    ),
  },
  {
    id: 'u1v34567-t2w8-3xy7-8u01-7y6z2a920123',
    name: 'Shadow Realm Box',
    description: 'Mysterious box from the realm of shadows',
    price: [300000, 600000, 900000, 1200000, 1500000],
    currency: 'USD',
    availability: 'AVAILABLE',
    lastUpdated: new Date(
      Date.now() - Math.floor(Math.random() * 10) * 60 * 60 * 1000,
    ),
  },
  {
    id: 'v2w45678-u3x9-4yz8-9v12-8z7a3b921234',
    name: 'Time Capsule Chest',
    description: 'Ancient chest containing temporal anomalies',
    price: [450000, 900000],
    currency: 'USD',
    availability: 'SOLD_OUT',
    lastUpdated: new Date(
      Date.now() - Math.floor(Math.random() * 10) * 60 * 60 * 1000,
    ),
  },
  {
    id: 'w3x56789-v4y0-5za9-0w23-9a8b4c922345',
    name: 'Dimensional Vault',
    description: 'Container that exists between dimensions',
    price: [500000, 750000, 1000000, 1250000],
    currency: 'USD',
    availability: 'LIMITED',
    lastUpdated: new Date(
      Date.now() - Math.floor(Math.random() * 10) * 60 * 60 * 1000,
    ),
  },
  {
    id: 'x4y67890-w5z1-6ab0-1x34-0b9c5d923456',
    name: 'Cosmic Nebula Box',
    description: 'Box containing essence of distant nebulae',
    price: [200000, 400000, 600000],
    currency: 'USD',
    availability: 'AVAILABLE',
    lastUpdated: new Date(
      Date.now() - Math.floor(Math.random() * 10) * 60 * 60 * 1000,
    ),
  },
  {
    id: 'y5z78901-x6a2-7bc1-2y45-1c0d6e924567',
    name: 'Elemental Crystal Set',
    description: 'Collection of crystals from all elements',
    price: [350000, 700000, 1050000, 1400000, 1750000],
    currency: 'USD',
    availability: 'LIMITED',
    lastUpdated: new Date(
      Date.now() - Math.floor(Math.random() * 10) * 60 * 60 * 1000,
    ),
  },
  {
    id: 'z6a89012-y7b3-8cd2-3z56-2d1e7f925678',
    name: 'Atlantean Relic Box',
    description: 'Preserved box from the lost city of Atlantis',
    price: [275000],
    currency: 'USD',
    availability: 'SOLD_OUT',
    lastUpdated: new Date(
      Date.now() - Math.floor(Math.random() * 10) * 60 * 60 * 1000,
    ),
  },
  {
    id: 'a7b90123-z8c4-9de3-4a67-3e2f8g926789',
    name: 'Spectral Ghost Box',
    description: 'Ethereal container with supernatural properties',
    price: [150000, 300000, 450000],
    currency: 'USD',
    availability: 'AVAILABLE',
    lastUpdated: new Date(
      Date.now() - Math.floor(Math.random() * 10) * 60 * 60 * 1000,
    ),
  },
  {
    id: 'b8c01234-a9d5-0ef4-5b78-4f3g9h927890',
    name: 'Quantum Mystery Vault',
    description: 'Box existing in multiple quantum states',
    price: [400000, 800000, 1200000, 1600000],
    currency: 'USD',
    availability: 'LIMITED',
    lastUpdated: new Date(
      Date.now() - Math.floor(Math.random() * 10) * 60 * 60 * 1000,
    ),
  },
  {
    id: 'c9d12345-b0e6-1fg5-6c89-5g4h0i928901',
    name: 'Pandora Legacy Box',
    description: 'Legendary box with untold mysteries',
    price: [1000000, 2000000],
    currency: 'USD',
    availability: 'AVAILABLE',
    lastUpdated: new Date(
      Date.now() - Math.floor(Math.random() * 10) * 60 * 60 * 1000,
    ),
  },
  {
    id: 'd0e23456-c1f7-2gh6-7d90-6h5i1j929012',
    name: 'Void Walker Collection',
    description: 'Items collected from the cosmic void',
    price: [550000, 825000, 1100000, 1375000, 1650000],
    currency: 'USD',
    availability: 'SOLD_OUT',
    lastUpdated: new Date(
      Date.now() - Math.floor(Math.random() * 10) * 60 * 60 * 1000,
    ),
  },
  {
    id: 'e1f34567-d2g8-3hi7-8e01-7i6j2k930123',
    name: 'Living Metal Case',
    description: 'Case made from mysterious living metal',
    price: [225000, 450000, 675000],
    currency: 'USD',
    availability: 'AVAILABLE',
    lastUpdated: new Date(
      Date.now() - Math.floor(Math.random() * 10) * 60 * 60 * 1000,
    ),
  },
  {
    id: 'f2g45678-e3h9-4ij8-9f12-8j7k3l931234',
    name: 'Gravity Well Box',
    description: 'Container warping space-time around it',
    price: [325000, 650000, 975000, 1300000],
    currency: 'USD',
    availability: 'LIMITED',
    lastUpdated: new Date(
      Date.now() - Math.floor(Math.random() * 10) * 60 * 60 * 1000,
    ),
  },
  {
    id: 'g3h56789-f4i0-5jk9-0g23-9k8l4m932345',
    name: 'Solar Flare Chest',
    description: 'Chest containing captured solar energy',
    price: [175000, 350000, 525000, 700000, 875000],
    currency: 'USD',
    availability: 'AVAILABLE',
    lastUpdated: new Date(
      Date.now() - Math.floor(Math.random() * 10) * 60 * 60 * 1000,
    ),
  },
  {
    id: 'h4i67890-g5j1-6kl0-1h34-0l9m5n933456',
    name: 'Mind Bender Vault',
    description: 'Vault containing reality-altering artifacts',
    price: [600000],
    currency: 'USD',
    availability: 'SOLD_OUT',
    lastUpdated: new Date(
      Date.now() - Math.floor(Math.random() * 10) * 60 * 60 * 1000,
    ),
  },
  {
    id: 'i5j78901-h6k2-7lm1-2i45-1m0n6o934567',
    name: 'Astral Projection Box',
    description: 'Box visible only to the third eye',
    price: [425000, 850000, 1275000],
    currency: 'USD',
    availability: 'LIMITED',
    lastUpdated: new Date(
      Date.now() - Math.floor(Math.random() * 10) * 60 * 60 * 1000,
    ),
  },
  {
    id: 'j6k89012-i7l3-8mn2-3j56-2n1o7p935678',
    name: 'Infinity Mirror Case',
    description: 'Case containing endless reflections of reality',
    price: [275000, 550000, 825000, 1100000],
    currency: 'USD',
    availability: 'AVAILABLE',
    lastUpdated: new Date(
      Date.now() - Math.floor(Math.random() * 10) * 60 * 60 * 1000,
    ),
  },
  {
    id: 'k7l90123-j8m4-9no3-4k67-3o2p8q936789',
    name: 'Dream Weaver Collection',
    description: 'Collection of items from the dream realm',
    price: [375000, 750000, 1125000, 1500000, 1875000],
    currency: 'USD',
    availability: 'LIMITED',
    lastUpdated: new Date(
      Date.now() - Math.floor(Math.random() * 10) * 60 * 60 * 1000,
    ),
  },
  {
    id: 'l8m01234-k9n5-0op4-5l78-4p3q9r937890',
    name: 'Echo Chamber Chest',
    description: 'Chest containing temporal echoes',
    price: [290000, 580000, 870000],
    currency: 'USD',
    availability: 'AVAILABLE',
    lastUpdated: new Date(
      Date.now() - Math.floor(Math.random() * 10) * 60 * 60 * 1000,
    ),
  },
];
