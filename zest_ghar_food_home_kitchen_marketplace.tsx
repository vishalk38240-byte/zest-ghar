import React, { useState, useEffect, useMemo } from 'react';
import {
  Search,
  MapPin,
  ShoppingBag,
  Heart,
  ShieldCheck,
  Clock,
  Sparkles,
  ChefHat,
  Utensils,
  Calendar,
  Train,
  Leaf,
  Check,
  Plus,
  Minus,
  X,
  Share2,
  Users,
  SlidersHorizontal,
  ArrowRight,
  CheckCircle2,
  Flame,
  Droplets,
  ChevronDown,
  Store,
  Video,
  FileCheck2,
  ThumbsUp,
  RotateCcw,
  Sun,
  Moon,
  Percent,
  LogIn,
  LogOut,
  UserPlus,
  User,
  Trash2,
  Receipt,
  Ticket,
  AlertCircle,
  Eye,
  EyeOff,
  Zap
} from 'lucide-react';

// ============================================================================
// 1. REUSABLE <FoodImage /> COMPONENT WITH SMOOTH FADE-IN & GUARANTEED FALLBACK
// ============================================================================

const FoodImage = ({
  src,
  alt,
  className = '',
  imgClassName = '',
  fallbackLabel = 'Zest & Ghar',
  isDark = false
}) => {
  const [loaded, setLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setLoaded(false);
    setHasError(false);
  }, [src]);

  return (
    <div
      className={`relative overflow-hidden select-none ${
        isDark ? 'bg-[#161D19]' : 'bg-[#FFF2F3]'
      } ${className}`}
    >
      {!loaded && !hasError && (
        <div
          className={`absolute inset-0 animate-pulse ${
            isDark
              ? 'bg-gradient-to-br from-[#161D19] to-[#0E1310]'
              : 'bg-gradient-to-br from-[#FFF2F3] via-[#FFF6EE] to-[#F8F9FA]'
          }`}
        />
      )}

      {!hasError && src ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover transition-all duration-500 ${
            loaded ? 'opacity-100' : 'opacity-0'
          } ${imgClassName}`}
        />
      ) : (
        <div
          className={`w-full h-full flex flex-col items-center justify-center p-3 text-center ${
            isDark
              ? 'bg-gradient-to-br from-[#19281F] to-[#0D130F] text-[#22C55E]'
              : 'bg-gradient-to-br from-[#E23744] to-[#FC8019] text-white'
          }`}
        >
          <Utensils className="w-6 h-6 mb-1 opacity-90" />
          <span className="text-[10px] font-semibold tracking-wide line-clamp-1">
            {fallbackLabel}
          </span>
        </div>
      )}
    </div>
  );
};

// ============================================================================
// 2. CURATED DATA SETS (LOCATIONS, DISHES, HOME CHEFS, RESTAURANTS, DINEOUT, PANTRY)
// ============================================================================

const LOCATIONS_LIST = [
  'Chennai - Egmore',
  'Maraimalai Nagar',
  'Bengaluru - Indiranagar',
  'Mumbai - Bandra',
  'Hyderabad - Jubilee Hills',
  'Delhi - CP'
];

const CITIES_LIST = [
  'Chennai & Maraimalai Nagar',
  'Bengaluru',
  'Mumbai',
  'Hyderabad',
  'Delhi NCR',
  'Pune',
  'Kolkata',
  'Coimbatore',
  'Kochi',
  'Jaipur'
];

const DEMO_ACCOUNTS = [
  {
    id: 'user-demo-customer',
    name: 'Arjun Krishnamurthy',
    contact: 'arjun@zestghar.in',
    password: 'password123',
    role: 'customer'
  },
  {
    id: 'user-demo-chef',
    name: 'Chef Meenakshi Sundaram',
    contact: 'meenakshi@zestghar.in',
    password: 'password123',
    role: 'chef'
  }
];

const HERO_IMAGES = {
  mainFeast:
    'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1000&q=80',
  biryaniHandi:
    'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
  homeThali:
    'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80'
};

const DISH_CATEGORIES = [
  {
    id: 'All',
    label: 'All Cravings',
    subtitle: 'Curated',
    image:
      'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'Biryani',
    label: 'Biryani',
    subtitle: 'Dum & Seeraga',
    image:
      'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'South Indian',
    label: 'South Indian',
    subtitle: 'Idli, Dosa & Meals',
    image:
      'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'North Indian',
    label: 'North Indian',
    subtitle: 'Tandoor & Dal',
    image:
      'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'Dosa',
    label: 'Dosa',
    subtitle: 'Stone-Ground',
    image:
      'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'Salad',
    label: 'Salad',
    subtitle: 'Fresh Bowls',
    image:
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'Filter Coffee',
    label: 'Filter Coffee',
    subtitle: '80:20 Brass',
    image:
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'Rolls',
    label: 'Rolls',
    subtitle: 'Flaky Paratha',
    image:
      'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'Indian Sweets',
    label: 'Indian Sweets',
    subtitle: 'Mithai & Payasam',
    image:
      'https://images.unsplash.com/photo-1758910536889-43ce7b3199fd?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'Gujarati', label: 'Gujarati', subtitle: 'Thali & Farsan',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'Rajasthani', label: 'Rajasthani', subtitle: 'Dal Baati & More',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'Maharashtrian', label: 'Maharashtrian', subtitle: 'Misal & Vada Pav',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'Bengali', label: 'Bengali', subtitle: 'Shorshe & Mishti',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'Punjabi', label: 'Punjabi', subtitle: 'Saag & Makki Roti',
    image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'Kerala', label: 'Kerala', subtitle: 'Appam & Coconut',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'Andhra', label: 'Andhra', subtitle: 'Gongura & Pulihora',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'Kashmiri', label: 'Kashmiri', subtitle: 'Wazwan Flavours',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'Odisha', label: 'Odia', subtitle: 'Dalma & Pakhala',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'Assamese', label: 'Assamese', subtitle: 'Tenga & Xaak',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'Goan', label: 'Goan', subtitle: 'Coastal Curry',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'Northeast', label: 'Northeast', subtitle: 'Regional Kitchens',
    image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'Hyderabadi', label: 'Hyderabadi', subtitle: 'Deccani Dum & Haleem',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'Bihari', label: 'Bihari', subtitle: 'Litti & Chokha',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'Awadhi', label: 'Awadhi', subtitle: 'Kebabs & Korma',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'Indian Street Food', label: 'Street Food', subtitle: 'Chaat & Snacks',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=400&q=80'
  }
];

const INITIAL_CHEFS = [
  {
    id: 'chef-meenakshi',
    name: 'Chef Meenakshi Sundaram',
    kitchenName: "Meenakshi's Chettinad Kitchen",
    avatar:
      'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=400&q=80',
    bannerImage:
      'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=900&q=80',
    specialty: 'Authentic Chettinad & Madurai',
    area: 'Chennai - Egmore',
    experience: '18 yrs home culinary craft',
    rating: 4.9,
    reviewsCount: 412,
    hygieneTier: 'Master Home Chef',
    fssaiNumber: '22425089001472',
    bio: 'Hand-roasted whole spices ground every morning on a granite ammi kallu. Zero artificial colors, cold-pressed gingelly oil only.',
    pureVeg: false,
    jainFriendly: false,
    kitchenLive: true,
    lunchBatch: {
      label: '1:00 PM Lunch Batch',
      cutoff: '11:30 AM',
      totalPlates: 16,
      bookedPlates: 12,
      isOpen: true
    },
    dinnerBatch: {
      label: '8:00 PM Dinner Batch',
      cutoff: '6:30 PM',
      totalPlates: 18,
      bookedPlates: 11,
      isOpen: true
    },
    dishes: [
      {
        id: 'dish-m1',
        name: 'Chettinad Milagu Kozhi & Phulka Thali',
        category: 'South Indian',
        price: 240,
        image:
          'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=500&q=80',
        description:
          'Black pepper roasted country chicken, paruppu rasam, vendakkai poriyal, curd & 3 whole-wheat phulkas.',
        isVeg: false,
        isJain: false,
        highProtein: true,
        prepMins: 35
      },
      {
        id: 'dish-m2',
        name: 'Karaikudi Mushroom & Seeraga Samba Biryani',
        category: 'Biryani',
        price: 220,
        image:
          'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=500&q=80',
        description:
          'Aromatic short-grain seeraga samba rice slow-cooked with wild button mushrooms, shallots & coconut milk raita.',
        isVeg: true,
        isJain: false,
        highProtein: false,
        prepMins: 25
      }
    ]
  },
  {
    id: 'chef-kavita',
    name: 'Chef Kavita Jhaveri',
    kitchenName: "Kavita's Jain Satvik Rasoi",
    avatar:
      'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=400&q=80',
    bannerImage:
      'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=80',
    specialty: '100% Jain & Satvik Homestyle',
    area: 'Maraimalai Nagar',
    experience: '14 yrs Satvik meal craft',
    rating: 4.9,
    reviewsCount: 328,
    hygieneTier: 'Green-Shield Hygiene Certified',
    fssaiNumber: '22425089002918',
    bio: 'Dedicated 100% vegetarian & strict Jain kitchen—zero onion, zero garlic, zero root vegetables. Cooked fresh in pure A2 cow ghee.',
    pureVeg: true,
    jainFriendly: true,
    kitchenLive: true,
    lunchBatch: {
      label: '1:00 PM Lunch Batch',
      cutoff: '11:45 AM',
      totalPlates: 14,
      bookedPlates: 11,
      isOpen: true
    },
    dinnerBatch: {
      label: '8:00 PM Dinner Batch',
      cutoff: '6:45 PM',
      totalPlates: 15,
      bookedPlates: 8,
      isOpen: true
    },
    dishes: [
      {
        id: 'dish-k1',
        name: 'Satvik Panchmel Dal & Methi Phulka Thali',
        category: 'North Indian',
        price: 210,
        image:
          'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=500&q=80',
        description:
          'Five-lentil slow-simmered dal, paneer bhurji (no onion/garlic), 4 soft methi phulkas & roasted papad.',
        isVeg: true,
        isJain: true,
        highProtein: true,
        prepMins: 22
      },
      {
        id: 'dish-k2',
        name: 'Sprouted Moong & Avocado Botanical Bowl',
        category: 'Salad',
        price: 195,
        image:
          'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=500&q=80',
        description:
          'Steamed green moong, Hass avocado, toasted pumpkin seeds, pomegranate & cold-pressed lime dressing.',
        isVeg: true,
        isJain: true,
        highProtein: true,
        prepMins: 18
      }
    ]
  },
  {
    id: 'chef-gurpreet',
    name: 'Chef Gurpreet Kaur',
    kitchenName: "Biji's Homestyle Punjabi Hearth",
    avatar:
      'https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&w=400&q=80',
    bannerImage:
      'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=900&q=80',
    specialty: 'Slow-Simmered North Indian',
    area: 'Bengaluru - Indiranagar',
    experience: '22 yrs family recipes',
    rating: 4.8,
    reviewsCount: 519,
    hygieneTier: 'Master Home Chef',
    fssaiNumber: '22425089003104',
    bio: 'Overnight-simmered dals, hand-rolled whole wheat rotis with zero maida, and homemade white makkhan churned every Sunday.',
    pureVeg: true,
    jainFriendly: false,
    kitchenLive: true,
    lunchBatch: {
      label: '1:00 PM Lunch Batch',
      cutoff: '11:30 AM',
      totalPlates: 20,
      bookedPlates: 17,
      isOpen: true
    },
    dinnerBatch: {
      label: '8:00 PM Dinner Batch',
      cutoff: '6:30 PM',
      totalPlates: 20,
      bookedPlates: 14,
      isOpen: true
    },
    dishes: [
      {
        id: 'dish-g1',
        name: 'Amritsari Chole, Jeera Rice & Ajwain Phulka Box',
        category: 'North Indian',
        price: 215,
        image:
          'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=500&q=80',
        description:
          'Tea-leaf infused dark chickpeas, cumin basmati, 2 ajwain phulkas & pickled green chilies.',
        isVeg: true,
        isJain: false,
        highProtein: true,
        prepMins: 25
      },
      {
        id: 'dish-g2',
        name: 'Paneer Tikka Whole-Wheat Kathi Roll',
        category: 'Rolls',
        price: 185,
        image:
          'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=500&q=80',
        description:
          'Char-grilled malai cottage cheese wrapped in soft whole-wheat lachha roti with mint chutney.',
        isVeg: true,
        isJain: false,
        highProtein: true,
        prepMins: 20
      }
    ]
  },
  {
    id: 'chef-rajan',
    name: 'Chef Rajan & Padma Iyer',
    kitchenName: 'Mylapore Heritage Tiffin Room',
    avatar:
      'https://images.unsplash.com/photo-1581299894007-aaa50297cf16?auto=format&fit=crop&w=400&q=80',
    bannerImage:
      'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=900&q=80',
    specialty: 'Traditional Tamil Brahmin Tiffin',
    area: 'Chennai - Egmore',
    experience: '25 yrs heirloom catering',
    rating: 4.9,
    reviewsCount: 640,
    hygieneTier: 'Master Home Chef',
    fssaiNumber: '22425089004882',
    bio: 'Stone-ground batter fermented naturally in brass vessels, paired with Kumbakonam degree filter coffee decoction.',
    pureVeg: true,
    jainFriendly: true,
    kitchenLive: true,
    lunchBatch: {
      label: '1:00 PM Lunch Batch',
      cutoff: '11:30 AM',
      totalPlates: 18,
      bookedPlates: 15,
      isOpen: true
    },
    dinnerBatch: {
      label: '8:00 PM Dinner Batch',
      cutoff: '6:30 PM',
      totalPlates: 22,
      bookedPlates: 16,
      isOpen: true
    },
    dishes: [
      {
        id: 'dish-r1',
        name: 'Ghee Podi Roast Dosa & Tiffin Trio',
        category: 'Dosa',
        price: 175,
        image:
          'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=500&q=80',
        description:
          'Crisp fermented dosa dusted with house-ground sesame gunpowder, 3 chutneys & drumstick arachuvitta sambar.',
        isVeg: true,
        isJain: true,
        highProtein: false,
        prepMins: 20
      },
      {
        id: 'dish-r2',
        name: 'Kumbakonam Degree Filter Coffee Flask (250ml)',
        category: 'Filter Coffee',
        price: 120,
        image:
          'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=500&q=80',
        description:
          'Single-estate Chikmagalur Peaberry 80:20 chicory decoction with frothy farm-fresh milk in insulated flask.',
        isVeg: true,
        isJain: true,
        highProtein: false,
        prepMins: 15
      }
    ]
  }
];

const REGIONAL_HOME_DISHES = {
  'chef-meenakshi': [
    { id: 'reg-m-bengali', name: 'Bengali Shorshe Maach & Steamed Rice', category: 'Bengali', price: 295, image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=500&q=80', description: 'Fish gently cooked in a pungent mustard and poppy-seed gravy with steamed rice.', isVeg: false, isJain: false, highProtein: true, prepMins: 32, ingredients: ['Fish', 'Mustard seeds', 'Poppy seeds', 'Green chilli', 'Turmeric', 'Mustard oil', 'Rice'], method: ['Grind mustard and poppy seeds into a smooth paste.', 'Lightly sear the fish, then simmer it in the mustard gravy.', 'Serve with freshly steamed rice.'] },
    { id: 'reg-m-andhra', name: 'Andhra Gongura Chicken & Rice', category: 'Andhra', price: 285, image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=500&q=80', description: 'Tangy gongura leaves and Andhra chilli give this chicken curry its bold regional flavour.', isVeg: false, isJain: false, highProtein: true, prepMins: 34, ingredients: ['Chicken', 'Gongura leaves', 'Onion', 'Garlic', 'Red chilli', 'Coriander', 'Rice'], method: ['Cook gongura leaves until soft and lightly tangy.', 'Simmer chicken with onion, chilli, garlic, and the cooked greens.', 'Serve with steamed rice.'] },
    { id: 'reg-m-goan', name: 'Goan Coconut Fish Curry & Rice', category: 'Goan', price: 310, image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=500&q=80', description: 'Coastal fish curry with coconut, kokum, and a gentle roasted-spice base.', isVeg: false, isJain: false, highProtein: true, prepMins: 30, ingredients: ['Fish', 'Coconut', 'Kokum', 'Coriander seeds', 'Red chilli', 'Turmeric', 'Rice'], method: ['Grind coconut and spices into a smooth masala.', 'Simmer the masala with kokum, then poach the fish until just cooked.', 'Serve with steamed rice.'] },
    { id: 'reg-m-northeast', name: 'Naga Smoked Pork with Axone & Rice', category: 'Northeast', price: 320, image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=500&q=80', description: 'Smoky pork simmered with fermented soybean, ginger, and Naga chilli.', isVeg: false, isJain: false, highProtein: true, prepMins: 42, ingredients: ['Pork', 'Axone (fermented soybean)', 'Naga chilli', 'Ginger', 'Garlic', 'Bamboo shoot', 'Rice'], method: ['Brown smoked pork with ginger and garlic.', 'Add axone, chilli, and bamboo shoot; simmer until the pork is tender.', 'Serve with steamed rice.'] }
  ],
  'chef-kavita': [
    { id: 'reg-k-gujarati', name: 'Gujarati Undhiyu & Bajra Rotla', category: 'Gujarati', price: 230, image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=500&q=80', description: 'Seasonal vegetables slow-cooked with methi muthia and served with bajra rotla.', isVeg: true, isJain: false, highProtein: false, prepMins: 38, ingredients: ['Surti papdi', 'Purple yam', 'Sweet potato', 'Eggplant', 'Methi muthia', 'Coconut', 'Bajra flour'], method: ['Prepare the methi muthia and cut the seasonal vegetables.', 'Layer and slow-cook the vegetables with a fresh coconut-spice masala.', 'Serve with hot bajra rotla.'] },
    { id: 'reg-k-rajasthani', name: 'Rajasthani Dal Baati Churma', category: 'Rajasthani', price: 245, image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=500&q=80', description: 'Panchmel dal with baked baati, churma, and a little ghee on the side.', isVeg: true, isJain: false, highProtein: true, prepMins: 40, ingredients: ['Toor dal', 'Chana dal', 'Moong dal', 'Wheat flour', 'Semolina', 'Jaggery', 'Ghee'], method: ['Bake wheat baati until crisp outside and cooked through.', 'Simmer mixed lentils with a cumin and chilli tempering.', 'Crush baati with ghee and serve with dal and churma.'] },
    { id: 'reg-k-sweets', name: 'Bengali Rasmalai with Saffron Milk', category: 'Indian Sweets', price: 150, image: 'https://images.unsplash.com/photo-1758910536889-43ce7b3199fd?auto=format&fit=crop&w=500&q=80', description: 'Soft chhena patties soaked in chilled saffron and cardamom milk.', isVeg: true, isJain: true, highProtein: false, prepMins: 25, ingredients: ['Milk', 'Lemon juice', 'Sugar', 'Saffron', 'Cardamom', 'Pistachio'], method: ['Curdle milk, rinse the chhena, and knead until smooth.', 'Shape and simmer the patties in light sugar syrup.', 'Soak in saffron-cardamom milk and chill before serving.'] },
    { id: 'reg-k-bihari', name: 'Bihari Litti Chokha & Chana', category: 'Bihari', price: 220, image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=500&q=80', description: 'Sattu-stuffed litti with roasted eggplant and tomato chokha.', isVeg: true, isJain: false, highProtein: true, prepMins: 36, ingredients: ['Whole-wheat flour', 'Sattu', 'Mustard oil', 'Eggplant', 'Tomato', 'Green chilli', 'Chana'], method: ['Stuff wheat dough balls with spiced sattu and bake until golden.', 'Roast eggplant and tomato, then mash with mustard oil and chilli.', 'Serve litti with chokha and spiced chana.'] }
  ],
  'chef-gurpreet': [
    { id: 'reg-g-punjabi', name: 'Sarson da Saag & Makki di Roti', category: 'Punjabi', price: 255, image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=500&q=80', description: 'Mustard greens simmered with seasonal greens, served with maize flatbread.', isVeg: true, isJain: false, highProtein: false, prepMins: 36, ingredients: ['Mustard greens', 'Spinach', 'Bathua', 'Ginger', 'Garlic', 'Maize flour', 'White butter'], method: ['Wash and simmer the greens until tender, then coarsely mash.', 'Finish with ginger, garlic, and a light tempering.', 'Serve with freshly griddled makki di roti.'] },
    { id: 'reg-g-kashmiri', name: 'Kashmiri Dum Aloo & Saffron Rice', category: 'Kashmiri', price: 265, image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=500&q=80', description: 'Baby potatoes in a yoghurt-based Kashmiri spice gravy with fragrant rice.', isVeg: true, isJain: false, highProtein: false, prepMins: 33, ingredients: ['Baby potatoes', 'Yogurt', 'Kashmiri chilli', 'Fennel powder', 'Dry ginger', 'Asafoetida', 'Basmati rice'], method: ['Parboil and prick baby potatoes, then lightly fry them.', 'Whisk yogurt with Kashmiri spices and simmer the potatoes in the gravy.', 'Serve with saffron-scented rice.'] },
    { id: 'reg-g-maharashtra', name: 'Kolhapuri Misal Pav', category: 'Maharashtrian', price: 195, image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=500&q=80', description: 'Sprouted matki usal topped with farsan, onion, and a punchy Kolhapuri rassa.', isVeg: true, isJain: false, highProtein: true, prepMins: 28, ingredients: ['Matki sprouts', 'Onion', 'Tomato', 'Kolhapuri masala', 'Farsan', 'Coriander', 'Pav'], method: ['Cook sprouted matki until tender.', 'Prepare a spicy onion-tomato rassa and pour over the usal.', 'Top with farsan, onion, and coriander; serve with pav.'] },
    { id: 'reg-g-awadhi', name: 'Awadhi Galouti Kebab & Ulte Tawa Paratha', category: 'Awadhi', price: 310, image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=500&q=80', description: 'Tender Lucknow-style kebabs with aromatic spices and a soft tawa paratha.', isVeg: false, isJain: false, highProtein: true, prepMins: 34, ingredients: ['Minced lamb', 'Raw papaya', 'Fried onion', 'Cardamom', 'Clove', 'Rose water', 'Wheat flour'], method: ['Marinate minced lamb with raw papaya and ground Awadhi spices.', 'Shape into soft patties and sear gently on a tawa.', 'Serve with ulte tawa paratha and mint chutney.'] }
  ],
  'chef-rajan': [
    { id: 'reg-r-kerala', name: 'Kerala Appam & Vegetable Stew', category: 'Kerala', price: 220, image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=500&q=80', description: 'Lacy fermented appam with vegetables simmered in coconut milk and curry leaves.', isVeg: true, isJain: false, highProtein: false, prepMins: 30, ingredients: ['Rice', 'Coconut', 'Coconut milk', 'Potato', 'Carrot', 'Green beans', 'Curry leaves'], method: ['Ferment rice batter and cook appams in a curved pan.', 'Simmer vegetables with coconut milk, ginger, and curry leaves.', 'Serve the stew warm with appam.'] },
    { id: 'reg-r-odisha', name: 'Odia Dalma & Pakhala Rice', category: 'Odisha', price: 210, image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=500&q=80', description: 'Lentils and vegetables cooked together with roasted cumin, served with fermented rice.', isVeg: true, isJain: false, highProtein: true, prepMins: 30, ingredients: ['Toor dal', 'Pumpkin', 'Raw banana', 'Papaya', 'Roasted cumin', 'Rice', 'Curd'], method: ['Cook lentils and seasonal vegetables together until soft.', 'Finish with roasted cumin and a mild tempering.', 'Serve with cooled pakhala rice.'] },
    { id: 'reg-r-assam', name: 'Assamese Masor Tenga & Rice', category: 'Assamese', price: 275, image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=500&q=80', description: 'Light tangy fish curry with tomato and lemon, served with steamed rice.', isVeg: false, isJain: false, highProtein: true, prepMins: 28, ingredients: ['River fish', 'Tomato', 'Lemon', 'Mustard oil', 'Turmeric', 'Coriander', 'Rice'], method: ['Lightly fry turmeric-seasoned fish.', 'Simmer tomato and lemon in a light broth, then return fish to the pan.', 'Serve with steamed rice and fresh coriander.'] },
    { id: 'reg-r-street', name: 'Mumbai Vada Pav & Dry Garlic Chutney', category: 'Indian Street Food', price: 120, image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=500&q=80', description: 'Spiced potato vada tucked into pav with dry garlic chutney and fried chilli.', isVeg: true, isJain: false, highProtein: false, prepMins: 22, ingredients: ['Potato', 'Gram flour', 'Green chilli', 'Garlic', 'Dry coconut', 'Pav', 'Coriander'], method: ['Season mashed potato, shape into rounds, dip in gram-flour batter, and fry.', 'Grind garlic, chilli, and dry coconut into chutney.', 'Serve the vada in pav with chutney and fried chilli.'] }
  ]
};

const mergeRegionalChefMenus = (savedChefs) => savedChefs.map((chef) => {
  const currentDishes = chef.dishes || [];
  const existingIds = new Set(currentDishes.map((dish) => dish.id));
  const regionalDishes = (REGIONAL_HOME_DISHES[chef.id] || []).filter((dish) => !existingIds.has(dish.id));
  return { ...chef, dishes: [...currentDishes, ...regionalDishes] };
});

const RESTAURANTS_DATA = [
  {
    id: 'rest-nizam',
    name: "Nizam's Royal Copper Handi",
    bannerImage:
      'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=900&q=80',
    cuisines: 'Hyderabadi • Deccani • Dum Biryani',
    area: 'Chennai - Egmore',
    distance: '1.9 km',
    etaMins: 35,
    rating: 4.7,
    costForTwo: '₹950 for two',
    pureVeg: false,
    jainFriendly: false,
    offerPrimary: 'Flat ₹120 off on Family Handis',
    offerSecondary: '50% off up to ₹100 with code ZEST50',
    menu: [
      {
        id: 'r-dish-9',
        name: 'Zafrani Murgh Dum Biryani (Copper Handi)',
        category: 'Biryani',
        price: 360,
        image:
          'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=400&q=80',
        isVeg: false,
        isJain: false,
        highProtein: true,
        prepMins: 28
      },
      {
        id: 'r-dish-10',
        name: 'Paneer Lababdar & Tandoori Lachha Paratha',
        category: 'North Indian',
        price: 320,
        image:
          'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=400&q=80',
        isVeg: true,
        isJain: false,
        highProtein: true,
        prepMins: 24
      }
    ]
  },
  {
    id: 'rest-oven',
    name: 'Kathiyawad Gujarati Rasoi',
    bannerImage:
      'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=80',
    cuisines: 'Gujarati • Kathiyawadi • Thali',
    area: 'Maraimalai Nagar',
    distance: '2.5 km',
    etaMins: 23,
    rating: 4.8,
    costForTwo: '₹1,050 for two',
    pureVeg: true,
    jainFriendly: true,
    offerPrimary: 'Flat 20% off on Gujarati Thalis',
    offerSecondary: 'Free chaas with family meal orders',
    menu: [
      {
        id: 'r-dish-11',
        name: 'Gujarati Handvo & Seasonal Chutney',
        category: 'Gujarati',
        price: 225,
        image:
          'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=400&q=80',
        description: 'Savory fermented lentil and rice cake baked with bottle gourd, sesame, and curry leaves.',
        ingredients: ['Rice', 'Chana dal', 'Toor dal', 'Bottle gourd', 'Yogurt', 'Sesame', 'Curry leaves'],
        method: ['Soak and grind rice and lentils, then ferment the batter with yogurt.', 'Fold in grated bottle gourd and spices; top with sesame.', 'Bake until golden and serve with chutney.'],
        isVeg: true,
        isJain: true,
        highProtein: true,
        prepMins: 22
      },
      {
        id: 'r-dish-12',
        name: 'Kachumber Salad & Masala Chaas',
        category: 'Salad',
        price: 145,
        image:
          'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&q=80',
        description: 'Cucumber, tomato, onion, and coriander tossed with lime, served with cumin-spiced buttermilk.',
        ingredients: ['Cucumber', 'Tomato', 'Onion', 'Coriander', 'Lime', 'Yogurt', 'Roasted cumin'],
        method: ['Dice the vegetables and toss with lime, salt, and coriander.', 'Whisk yogurt with water, roasted cumin, and a pinch of salt for the chaas.', 'Serve the salad chilled alongside the chaas.'],
        isVeg: true,
        isJain: true,
        highProtein: true,
        prepMins: 16
      }
    ]
  },
  {
    id: 'rest-dakshin',
    name: 'Dakshin Courtyard & Co.',
    bannerImage:
      'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=900&q=80',
    cuisines: 'South Indian • Coastal • Biryani',
    area: 'Bengaluru - Indiranagar',
    distance: '3.2 km',
    etaMins: 29,
    rating: 4.6,
    costForTwo: '₹750 for two',
    pureVeg: true,
    jainFriendly: true,
    offerPrimary: 'Flat 15% off on all orders + 1 more',
    offerSecondary: 'Free Filter Coffee above ₹399',
    menu: [
      {
        id: 'r-dish-5',
        name: 'Jackfruit & Cashew Donne Biryani',
        category: 'Biryani',
        price: 280,
        image:
          'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=400&q=80',
        isVeg: true,
        isJain: false,
        highProtein: false,
        prepMins: 27
      },
      {
        id: 'r-dish-6',
        name: 'Crispy Rava Onion & Pepper Dosa',
        category: 'Dosa',
        price: 195,
        image:
          'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=400&q=80',
        isVeg: true,
        isJain: false,
        highProtein: false,
        prepMins: 19
      }
    ]
  },
  {
    id: 'rest-kathi',
    name: 'Kolkata Kathi & Bombay Tawa House',
    bannerImage:
      'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=900&q=80',
    cuisines: 'Kolkata • Maharashtrian • North Indian',
    area: 'Mumbai - Bandra',
    distance: '2.8 km',
    etaMins: 25,
    rating: 4.5,
    costForTwo: '₹650 for two',
    pureVeg: false,
    jainFriendly: false,
    offerPrimary: 'Buy 1 Get 1 on Signature Rolls',
    offerSecondary: 'Up to 10% off with Bank/UPI offers',
    menu: [
      {
        id: 'r-dish-7',
        name: 'Double Egg & Pepper Chicken Roomali Roll',
        category: 'Rolls',
        price: 230,
        image:
          'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=400&q=80',
        isVeg: false,
        isJain: false,
        highProtein: true,
        prepMins: 20
      },
      {
        id: 'r-dish-8',
        name: 'Dal Bukhara & Garlic Butter Naan Platter',
        category: 'North Indian',
        price: 310,
        image:
          'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=400&q=80',
        isVeg: true,
        isJain: false,
        highProtein: true,
        prepMins: 26
      }
    ]
  }
];

const REGIONAL_RESTAURANT_DISHES = {
  'rest-nizam': [
    { id: 'r-dish-13', name: 'Hyderabadi Dum Haleem & Khubani Chutney', category: 'Hyderabadi', price: 325, image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=400&q=80', description: 'Slow-cooked wheat, lentils, and meat finished with fried onion, mint, and warm spices.', ingredients: ['Mutton', 'Wheat', 'Lentils', 'Fried onion', 'Mint', 'Ghee', 'Whole spices'], method: ['Slow-cook wheat, lentils, and meat until soft.', 'Pound and blend to a thick texture, then finish with ghee and spices.', 'Serve with fried onion, mint, and khubani chutney.'], isVeg: false, isJain: false, highProtein: true, prepMins: 45 },
    { id: 'r-dish-14', name: 'Hyderabadi Double Ka Meetha', category: 'Indian Sweets', price: 145, image: 'https://images.unsplash.com/photo-1758910536889-43ce7b3199fd?auto=format&fit=crop&w=400&q=80', description: 'Fried bread pudding with saffron milk, cardamom, and toasted nuts.', ingredients: ['Bread', 'Milk', 'Sugar', 'Saffron', 'Cardamom', 'Cashew', 'Raisin'], method: ['Toast bread pieces in ghee until golden.', 'Simmer in sweetened saffron-cardamom milk until soft.', 'Garnish with toasted nuts and serve warm.'], isVeg: true, isJain: true, highProtein: false, prepMins: 25 }
  ],
  'rest-oven': [
    { id: 'r-dish-15', name: 'Fafda, Jalebi & Gujarati Kadhi', category: 'Gujarati', price: 210, image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=400&q=80', description: 'Crisp gram-flour fafda and sweet jalebi served with a light, spiced Gujarati kadhi.', ingredients: ['Gram flour', 'Papad khar', 'Yogurt', 'Besan', 'Sugar', 'Saffron', 'Mustard seeds'], method: ['Knead and stretch gram-flour dough into thin fafda; fry until crisp.', 'Ferment jalebi batter, pipe into hot oil, and dip in saffron syrup.', 'Whisk yogurt and besan with spices and simmer into kadhi.'], isVeg: true, isJain: false, highProtein: false, prepMins: 35 },
    { id: 'r-dish-16', name: 'Khandvi Rolls with Coconut & Sesame', category: 'Gujarati', price: 165, image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=400&q=80', description: 'Soft gram-flour and yogurt rolls topped with mustard, sesame, coconut, and coriander.', ingredients: ['Gram flour', 'Yogurt', 'Mustard seeds', 'Sesame', 'Coconut', 'Coriander', 'Green chilli'], method: ['Whisk gram flour and yogurt into a smooth batter and cook until glossy.', 'Spread thinly, cool slightly, then roll into delicate spirals.', 'Top with a mustard-sesame tempering, coconut, and coriander.'], isVeg: true, isJain: false, highProtein: true, prepMins: 25 }
  ],
  'rest-dakshin': [
    { id: 'r-dish-17', name: 'Mysore Masala Dosa with Coconut Chutney', category: 'Dosa', price: 210, image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=400&q=80', description: 'Crisp fermented dosa layered with Mysore red chutney and potato palya.', ingredients: ['Rice', 'Urad dal', 'Fenugreek', 'Potato', 'Onion', 'Red chilli', 'Coconut'], method: ['Ferment rice and urad dal batter and spread it thin on a hot tawa.', 'Spread red chilli chutney and add spiced potato palya.', 'Roast until crisp and serve with coconut chutney.'], isVeg: true, isJain: false, highProtein: false, prepMins: 24 },
    { id: 'r-dish-18', name: 'Kerala Puttu & Kadala Curry', category: 'Kerala', price: 230, image: 'https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=400&q=80', description: 'Steamed rice and coconut cylinders with black chickpeas in a roasted coconut gravy.', ingredients: ['Rice flour', 'Coconut', 'Black chickpeas', 'Onion', 'Tomato', 'Coriander', 'Curry leaves'], method: ['Layer moistened rice flour and coconut in a puttu steamer; steam until fluffy.', 'Cook black chickpeas with roasted coconut masala and curry leaves.', 'Serve the kadala curry alongside the warm puttu.'], isVeg: true, isJain: false, highProtein: true, prepMins: 32 }
  ],
  'rest-kathi': [
    { id: 'r-dish-19', name: 'Mumbai Vada Pav with Fried Green Chilli', category: 'Indian Street Food', price: 95, image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=400&q=80', description: 'Mumbai-style potato vada in pav with dry garlic chutney and fried chilli.', ingredients: ['Potato', 'Gram flour', 'Garlic', 'Dry coconut', 'Green chilli', 'Pav', 'Coriander'], method: ['Season mashed potatoes and shape into rounds.', 'Dip in gram-flour batter and fry until crisp.', 'Serve in pav with dry garlic chutney and fried chilli.'], isVeg: true, isJain: false, highProtein: false, prepMins: 20 },
    { id: 'r-dish-20', name: 'Kolkata Egg Kathi Roll', category: 'Rolls', price: 185, image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=400&q=80', description: 'Flaky paratha wrapped around an egg, spiced filling, onion, and tangy chutney.', ingredients: ['Egg', 'Flour', 'Onion', 'Green chilli', 'Chaat masala', 'Lime', 'Mint chutney'], method: ['Cook a thin paratha and spread beaten egg over it on the tawa.', 'Add spiced filling, onion, and mint chutney.', 'Roll tightly and serve hot with lime.'], isVeg: false, isJain: false, highProtein: true, prepMins: 18 }
  ]
};

const EXPANDED_RESTAURANTS_DATA = RESTAURANTS_DATA.map((restaurant) => ({
  ...restaurant,
  menu: [...restaurant.menu, ...(REGIONAL_RESTAURANT_DISHES[restaurant.id] || [])]
}));

// DEDICATED DINEOUT VENUES (Distinct from Delivery & Fresh Pantry!)
const DINEOUT_VENUES = [
  {
    id: 'dine-skyloft',
    name: 'Marina Madras Rooftop Kitchen',
    interiorImage:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80',
    cuisines: 'Tamil • Chettinad • Coastal South Indian',
    location: 'Chennai - Egmore',
    distanceKm: 1.4,
    costForTwoNum: 1600,
    rating: 4.9,
    ambience: ['Rooftop', 'Fine Dining', 'GIRF 50% Off'],
    offerPrimary: 'Flat 50% off on GIRF Table Pre-Booking',
    offerSecondary: 'Up to 15% extra off with HDFC / ICICI Dining Cards',
    tableNote: 'Marina skyline seating • Fresh dosa, tandoor, and coastal specials'
  },
  {
    id: 'dine-velvet',
    name: 'Velvet Saffron — Royal Dining Room',
    interiorImage:
      'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=80',
    cuisines: 'Awadhi • Bengali • Coastal Indian',
    location: 'Maraimalai Nagar',
    distanceKm: 2.1,
    costForTwoNum: 1400,
    rating: 4.8,
    ambience: ['Fine Dining', 'Private Booth'],
    offerPrimary: 'Flat 25% off on Total Dining Bill + 2 more',
    offerSecondary: 'Complimentary Welcome Sharbat & Dessert Platter',
    tableNote: 'Candlelit teakwood booths • Sommelier-curated spice pairings'
  },
  {
    id: 'dine-banyan',
    name: 'Banyan Courtyard Grand Buffet',
    interiorImage:
      'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=900&q=80',
    cuisines: '72-Dish Pan-Indian & Asian Buffet • Live Chaat',
    location: 'Bengaluru - Indiranagar',
    distanceKm: 3.0,
    costForTwoNum: 1200,
    rating: 4.7,
    ambience: ['Family Buffet', 'GIRF 50% Off'],
    offerPrimary: 'Flat 50% off on Lunch & Dinner Buffet (GIRF)',
    offerSecondary: 'Kids under 8 dine free • Instant UPI cashback ₹150',
    tableNote: 'Spacious family tables • Live dosa, pasta & wood-fired grill stations'
  },
  {
    id: 'dine-veranda',
    name: 'Konkan Coast Veranda',
    interiorImage:
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=80',
    cuisines: 'Konkani • Goan • Coastal Indian',
    location: 'Mumbai - Bandra',
    distanceKm: 1.8,
    costForTwoNum: 1100,
    rating: 4.8,
    ambience: ['Rooftop', 'Family Buffet'],
    offerPrimary: 'Flat 20% off on pre-booking + 3 more',
    offerSecondary: 'Up to 10% off with Bank/UPI offers',
    tableNote: 'Sunlit veranda • Goan fish curry, sol kadhi, and seasonal thalis'
  }
];

// DEDICATED FRESH PANTRY GROCERY & HOMEMADE STAPLES (Distinct from Dineout!)
const PANTRY_PRODUCTS = [
  {
    id: 'pan-veg-1',
    name: 'Nilgiri Organic Hydroponic Salad Greens & Avocado Box',
    category: 'Fresh Fruits & Veggies',
    packSize: '500g',
    mrp: 320,
    price: 259,
    eta: '15 mins',
    maker: 'Nilgiri Morning Farm Collective',
    image:
      'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80',
    isVeg: true,
    isJain: true
  },
  {
    id: 'pan-veg-2',
    name: 'Alphonso & Farm-Fresh Seasonal Fruit Basket',
    category: 'Fresh Fruits & Veggies',
    packSize: '1 kg',
    mrp: 290,
    price: 225,
    eta: '15 mins',
    maker: 'Ratnagiri & Salem Orchards',
    image:
      'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=600&q=80',
    isVeg: true,
    isJain: true
  },
  {
    id: 'pan-bat-1',
    name: 'Stone-Ground Wild Rice Idli & Crispy Dosa Batter',
    category: 'Homemade Batters & Pickles',
    packSize: '1 kg',
    mrp: 135,
    price: 105,
    eta: '15 mins',
    maker: 'Mylapore Heritage Tiffin Room',
    image:
      'https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=600&q=80',
    isVeg: true,
    isJain: true
  },
  {
    id: 'pan-bat-2',
    name: 'Sun-Cured Andhra Avakaya Mango & Gingelly Pickle',
    category: 'Homemade Batters & Pickles',
    packSize: '250g',
    mrp: 210,
    price: 175,
    eta: '15 mins',
    maker: "Meenakshi's Chettinad Kitchen",
    image:
      'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80',
    isVeg: true,
    isJain: false
  },
  {
    id: 'pan-oil-1',
    name: 'Wood-Churned Cold-Pressed Gingelly (Sesame) Oil',
    category: 'Cold-Pressed Oils & Dairy',
    packSize: '1L',
    mrp: 450,
    price: 385,
    eta: '15 mins',
    maker: 'Chettinad Marachekku Collective',
    image:
      'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=600&q=80',
    isVeg: true,
    isJain: true
  },
  {
    id: 'pan-oil-2',
    name: 'Pure A2 Gir Cow Bilona Cultured Desi Ghee',
    category: 'Cold-Pressed Oils & Dairy',
    packSize: '500g',
    mrp: 760,
    price: 665,
    eta: '15 mins',
    maker: "Kavita's Jain Satvik Rasoi",
    image:
      'https://images.unsplash.com/photo-1589927986089-35812388d1f4?auto=format&fit=crop&w=600&q=80',
    isVeg: true,
    isJain: true
  },
  {
    id: 'pan-snk-1',
    name: 'Chikmagalur 80:20 Brass-Roast Filter Coffee Powder',
    category: 'Snacks & Beverages',
    packSize: '250g',
    mrp: 280,
    price: 235,
    eta: '15 mins',
    maker: 'Rajan & Padma Iyer',
    image:
      'https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&w=600&q=80',
    isVeg: true,
    isJain: true
  },
  {
    id: 'pan-snk-2',
    name: 'Hand-Twisted Butter Murukku & Roasted Makhana Jar',
    category: 'Snacks & Beverages',
    packSize: '250g',
    mrp: 195,
    price: 155,
    eta: '15 mins',
    maker: "Biji's Homestyle Hearth",
    image:
      'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80',
    isVeg: true,
    isJain: true
  }
];

const TRAIN_STATIONS = [
  {
    code: 'MAS',
    name: 'Chennai Central (MAS)',
    platformNote: 'Delivered directly to Coach Door • 35 mins prior cutoff',
    meals: [
      {
        id: 'tr-1',
        name: 'Jain Satvik Travel Thali (Leak-Proof Eco Box)',
        kitchen: "Kavita's Jain Satvik Rasoi",
        image:
          'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=500&q=80',
        price: 225,
        isVeg: true,
        isJain: true
      },
      {
        id: 'tr-2',
        name: 'Chettinad Pepper Chicken & Parotta Meal Box',
        kitchen: "Meenakshi's Chettinad Kitchen",
        image:
          'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=500&q=80',
        price: 250,
        isVeg: false,
        isJain: false
      }
    ]
  },
  {
    code: 'KPD',
    name: 'Katpadi Jn (KPD)',
    platformNote: 'Vellore Home-Chef Cluster • Hot-sealed foil-free trays',
    meals: [
      {
        id: 'tr-3',
        name: 'Ambur Star Seeraga Samba Veg Biryani & Raita',
        kitchen: 'Vellore Heritage Hearth',
        image:
          'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=500&q=80',
        price: 210,
        isVeg: true,
        isJain: false
      }
    ]
  },
  {
    code: 'MDU',
    name: 'Madurai Jn (MDU)',
    platformNote: 'Temple City Home Kitchens • Authentic banana-leaf packed',
    meals: [
      {
        id: 'tr-4',
        name: 'Madurai Kari Dosa & Paruppu Urundai Kuzhambu Box',
        kitchen: 'Meenakshi Heritage Kitchen',
        image:
          'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=500&q=80',
        price: 235,
        isVeg: false,
        isJain: false
      }
    ]
  }
];

const INITIAL_CRAVINGS = [
  {
    id: 'crav-1',
    dish: 'Homemade Puran Poli with Warm A2 Ghee',
    requestedBy: 'Sneha R. • Chennai - Egmore',
    notes: 'Looking for authentic Maharashtrian chana dal & jaggery puran poli for Sunday lunch.',
    votes: 19,
    upvoted: false,
    acceptedByChef: false
  },
  {
    id: 'crav-2',
    dish: 'Zero-Oil Ragi Mudde & Drumstick Bassaru',
    requestedBy: 'Karthik V. • Maraimalai Nagar',
    notes: 'High-fiber millet lunch batch for 4 colleagues this week.',
    votes: 14,
    upvoted: false,
    acceptedByChef: false
  },
  {
    id: 'crav-3',
    dish: 'Traditional Elai Adai (Steamed Rice Parcels)',
    requestedBy: 'Meera N. • Bengaluru - Indiranagar',
    notes: 'Evening tiffin batch steamed in banana leaves with palm jaggery & coconut.',
    votes: 23,
    upvoted: true,
    acceptedByChef: false
  }
];

const INITIAL_ORDERS = [
  {
    id: 'ZG-9041',
    customerName: 'Arjun Krishnamurthy',
    area: 'Chennai - Egmore',
    batchLabel: '1:00 PM Lunch Batch',
    isHomeKitchen: true,
    otp: '4829',
    status: 'Chef Preparing',
    total: 520,
    createdAt: '12:12 PM',
    items: [
      {
        name: 'Chettinad Milagu Kozhi & Phulka Thali',
        qty: 2,
        price: 260,
        customizations: {
          oil: 'Low Oil',
          spice: 'Mild',
          extraGhee: true,
          grain: '3 Phulkas'
        }
      }
    ]
  }
];

const FOOD_RECIPE_DETAILS = {
  'dish-m1': { ingredients: ['Country chicken', 'Black pepper', 'Ginger', 'Garlic', 'Curry leaves', 'Onion', 'Tomato', 'Rasam spices', 'Phulka flour'], method: ['Roast and grind the whole spices.', 'Cook the chicken with the masala, onion, tomato, and curry leaves until tender.', 'Serve with rasam, vegetables, and freshly cooked phulkas.'] },
  'dish-m2': { ingredients: ['Seeraga samba rice', 'Mushrooms', 'Shallots', 'Coconut milk', 'Ginger', 'Garlic', 'Biryani spices', 'Mint', 'Coriander'], method: ['Rinse and soak the rice briefly.', 'Sauté shallots, mushrooms, herbs, and spices.', 'Add rice and coconut milk; cook covered until fluffy.'] },
  'dish-k1': { ingredients: ['Toor dal', 'Moong dal', 'Masoor dal', 'Chana dal', 'Urad dal', 'Paneer', 'Methi', 'Whole-wheat flour', 'Ghee', 'Cumin'], method: ['Simmer the lentils until soft and finish with a cumin tempering.', 'Cook paneer with methi and spices without onion or garlic.', 'Roll and griddle the methi phulkas; serve with dal and papad.'] },
  'dish-k2': { ingredients: ['Green moong sprouts', 'Avocado', 'Pumpkin seeds', 'Pomegranate', 'Lime', 'Coriander', 'Black pepper'], method: ['Steam the moong until just tender and cool.', 'Toss with avocado, pomegranate, and lime dressing.', 'Finish with toasted pumpkin seeds and coriander.'] },
  'dish-g1': { ingredients: ['Chickpeas', 'Basmati rice', 'Whole-wheat flour', 'Tea leaves', 'Onion', 'Tomato', 'Ginger', 'Garlic', 'Chole masala', 'Ajwain'], method: ['Simmer chickpeas with tea-infused water and Punjabi spices.', 'Cook cumin rice and roll ajwain phulkas.', 'Pack together with pickled green chilli.'] },
  'dish-g2': { ingredients: ['Paneer', 'Whole-wheat flour', 'Yogurt', 'Bell pepper', 'Onion', 'Mint', 'Coriander', 'Tikka spices'], method: ['Marinate paneer and vegetables in yogurt and spices.', 'Char-grill until lightly smoky.', 'Wrap in a griddled whole-wheat roti with mint chutney.'] },
  'dish-r1': { ingredients: ['Dosa rice', 'Urad dal', 'Fenugreek', 'Sesame', 'Red chilli', 'Coconut', 'Coriander', 'Drumstick', 'Tamarind'], method: ['Ferment the rice and urad dal batter, then spread it thin on a hot tawa.', 'Add ghee and house-ground podi; roast until crisp.', 'Serve with chutneys and drumstick sambar.'] },
  'dish-r2': { ingredients: ['Chikmagalur coffee', 'Chicory', 'Milk', 'Water', 'Sugar (optional)'], method: ['Brew the coffee-chicory blend in a South Indian filter.', 'Combine the decoction with hot milk to taste.', 'Pour between tumbler and dabarah to create the froth.'] },
  'r-dish-9': { ingredients: ['Chicken', 'Basmati rice', 'Yogurt', 'Fried onion', 'Saffron', 'Mint', 'Coriander', 'Whole spices', 'Ginger', 'Garlic'], method: ['Marinate chicken with yogurt, ginger, garlic, and spices.', 'Layer with par-cooked basmati, herbs, fried onion, and saffron.', 'Seal and dum-cook until the rice is fluffy and chicken is tender.'] },
  'r-dish-10': { ingredients: ['Paneer', 'Tomato', 'Cashew', 'Cream', 'Butter', 'Ginger', 'Spices', 'Whole-wheat flour'], method: ['Simmer tomato, cashew, and spices into a smooth gravy.', 'Fold in paneer, butter, and cream.', 'Serve with flaky tandoori lachha paratha.'] },
  'r-dish-11': { ingredients: ['Rice', 'Chana dal', 'Toor dal', 'Bottle gourd', 'Yogurt', 'Sesame', 'Curry leaves'], method: ['Soak and grind rice and lentils, then ferment the batter with yogurt.', 'Fold in grated bottle gourd and spices; top with sesame.', 'Bake until golden and serve with chutney.'] },
  'r-dish-12': { ingredients: ['Cucumber', 'Tomato', 'Onion', 'Coriander', 'Lime', 'Yogurt', 'Roasted cumin'], method: ['Dice the vegetables and toss with lime, salt, and coriander.', 'Whisk yogurt with water, roasted cumin, and a pinch of salt for the chaas.', 'Serve the salad chilled alongside the chaas.'] },
  'r-dish-5': { ingredients: ['Jackfruit', 'Seeraga samba rice', 'Cashews', 'Onion', 'Mint', 'Coriander', 'Biryani spices', 'Coconut'], method: ['Sauté jackfruit with spices, herbs, and cashews.', 'Add washed seeraga samba rice and measured stock.', 'Cook covered until the rice is tender; serve with raita.'] },
  'r-dish-6': { ingredients: ['Semolina', 'Rice flour', 'Onion', 'Green chilli', 'Black pepper', 'Cumin', 'Curry leaves', 'Ghee'], method: ['Mix semolina and rice flour into a thin, rested batter.', 'Stir in onion, chilli, pepper, cumin, and curry leaves.', 'Pour lacy batter on a hot tawa and roast with ghee until crisp.'] },
  'r-dish-7': { ingredients: ['Eggs', 'Chicken', 'Roomali roti', 'Black pepper', 'Onion', 'Green chilli', 'Mint chutney', 'Lime'], method: ['Season and grill the chicken with pepper and spices.', 'Cook two eggs into a thin omelette and layer with the chicken.', 'Wrap in roomali roti with onion, chutney, and lime.'] },
  'r-dish-8': { ingredients: ['Black lentils', 'Kidney beans', 'Tomato', 'Butter', 'Cream', 'Garlic', 'Naan flour', 'Garlic butter'], method: ['Slow-cook lentils and kidney beans until creamy.', 'Finish the dal with tomato, butter, and cream.', 'Bake naan in a hot tandoor and brush with garlic butter.'] },
  'tr-1': { ingredients: ['Toor dal', 'Seasonal vegetables', 'Rice', 'Whole-wheat flour', 'Ghee', 'Cumin', 'Turmeric'], method: ['Cook dal and vegetables with a mild spice tempering.', 'Prepare rice and soft phulkas separately.', 'Seal in a leak-resistant travel meal box.'] },
  'tr-2': { ingredients: ['Chicken', 'Black pepper', 'Ginger', 'Garlic', 'Parotta flour', 'Onion', 'Curry leaves'], method: ['Cook chicken with pepper, ginger, garlic, and curry leaves.', 'Prepare and layer flaky parottas.', 'Pack hot in a sealed meal box for train delivery.'] },
  'tr-3': { ingredients: ['Seeraga samba rice', 'Seasonal vegetables', 'Onion', 'Tomato', 'Biryani spices', 'Mint', 'Raita'], method: ['Sauté vegetables with biryani spices and herbs.', 'Add rice and cook covered until fluffy.', 'Pack with raita in a travel-safe container.'] },
  'tr-4': { ingredients: ['Dosa batter', 'Chicken', 'Egg', 'Rice', 'Lentils', 'Drumstick', 'Tamarind', 'Spices'], method: ['Cook the dosa batter with a seasoned chicken and egg filling.', 'Prepare paruppu urundai kuzhambu with lentil dumplings.', 'Pack the meal securely for delivery to the train.'] }
};

// ============================================================================
// 3. MAIN APPLICATION COMPONENT
// ============================================================================

export default function App() {
  const loadState = (key, fallback) => {
    try {
      const saved = localStorage.getItem(key);
      return saved ? JSON.parse(saved) : fallback;
    } catch {
      return fallback;
    }
  };

  // --- Theme & Navigation ---
  const [themeMode, setThemeMode] = useState(() => loadState('zg_theme', 'zomato'));
  const isDark = themeMode === 'dark';

  // --- Mandatory Sign In & Registration State ---
  const [registeredUsers, setRegisteredUsers] = useState(() =>
    loadState('zg_registered_users', DEMO_ACCOUNTS)
  );
  const [currentUser, setCurrentUser] = useState(() =>
    loadState('zg_current_user', null)
  );
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authTab, setAuthTab] = useState('signin'); // 'signin' | 'register'
  const [authPromptReason, setAuthPromptReason] = useState('');
  const [authForm, setAuthForm] = useState({
    name: '',
    contact: '',
    password: '',
    role: 'customer'
  });
  const [authError, setAuthError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // --- Marketplace Navigation & Filters ---
  const [activeTab, setActiveTab] = useState(() =>
    loadState('zg_active_tab', 'home-kitchens')
  );
  const [selectedArea, setSelectedArea] = useState(() =>
    loadState('zg_area', LOCATIONS_LIST[0])
  );
  const [selectedCity, setSelectedCity] = useState('Chennai & Maraimalai Nagar');
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchSuggestions, setShowSearchSuggestions] = useState(false);
  const [selectedDishDetail, setSelectedDishDetail] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [dietaryFilters, setDietaryFilters] = useState({
    pureVeg: false,
    jain: false,
    highProtein: false,
    under30: false,
    favoritesOnly: false
  });
  const [showHero, setShowHero] = useState(true);

  // --- Core Persisted Data ---
  const [chefs, setChefs] = useState(() => mergeRegionalChefMenus(loadState('zg_chefs', INITIAL_CHEFS)));
  const [cart, setCart] = useState(() => loadState('zg_cart', []));
  const [orders, setOrders] = useState(() => loadState('zg_orders', INITIAL_ORDERS));
  const [bookings, setBookings] = useState(() => loadState('zg_bookings', []));
  const [favorites, setFavorites] = useState(() =>
    loadState('zg_favorites', ['chef-meenakshi', 'rest-nizam'])
  );
  const [cravings, setCravings] = useState(() =>
    loadState('zg_cravings', INITIAL_CRAVINGS)
  );
  const [tiffinPlan, setTiffinPlan] = useState(() =>
    loadState('zg_tiffin', {
      duration: 'weekly',
      slot: 'Lunch',
      pausedDays: [3, 6]
    })
  );

  // --- Separate Dineout & Pantry Filters ---
  const [dineoutAmbience, setDineoutAmbience] = useState('All Venues');
  const [dineoutSort, setDineoutSort] = useState('rating'); // 'rating' | 'cost' | 'nearest'
  const [pantryCategory, setPantryCategory] = useState('All Staples');

  // --- Drawers & Modals ---
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [customizingDish, setCustomizingDish] = useState(null);
  const [customOptions, setCustomOptions] = useState({
    oil: 'Low Oil',
    spice: 'Medium',
    extraGhee: false,
    grain: '3 Phulkas',
    notes: ''
  });
  const [hygieneModalChef, setHygieneModalChef] = useState(null);
  const [showTiffinModal, setShowTiffinModal] = useState(false);

  // --- Dineout Reservation Modal State ---
  const [bookingVenue, setBookingVenue] = useState(null);
  const [bookingForm, setBookingForm] = useState({
    date: 'Today, Nov 17',
    slot: '8:30 PM',
    guests: 2,
    zone: 'Rooftop'
  });

  // --- Order Tracking Modal ---
  const [activeOrderTracker, setActiveOrderTracker] = useState(null);

  // --- Cart, Group Bill Splitter & Promo Codes ---
  const [promoCodeInput, setPromoCodeInput] = useState('');
  const [appliedPromo, setAppliedPromo] = useState(null);
  const [noCutlery, setNoCutlery] = useState(true);
  const [deliveryNote, setDeliveryNote] = useState('Leave at door • Ring bell once');
  const [groupSplitEnabled, setGroupSplitEnabled] = useState(false);
  const [groupFriends, setGroupFriends] = useState(['Aarav', 'Diya']);
  const [newFriendName, setNewFriendName] = useState('');

  // --- Craving Board Form ---
  const [newCravingDish, setNewCravingDish] = useState('');
  const [newCravingNote, setNewCravingNote] = useState('');

  // --- Food on Train ---
  const [selectedStationCode, setSelectedStationCode] = useState('MAS');
  const [pnrNumber, setPnrNumber] = useState('4528190344');
  const [coachSeat, setCoachSeat] = useState('B2 / 42');

  // --- Chef Dashboard ---
  const [chefSubTab, setChefSubTab] = useState('batches');
  const [prepChecklist, setPrepChecklist] = useState({
    spices: true,
    lowOilBatch: false,
    phulkas: false,
    seals: false
  });
  const [batchCountdownsSec, setBatchCountdownsSec] = useState({ lunch: 2280, dinner: 2280 });

  // --- Toast ---
  const [toast, setToast] = useState(null);
  const triggerToast = (message) => {
    setToast(message);
    setTimeout(() => {
      setToast((prev) => (prev === message ? null : prev));
    }, 3400);
  };

  // --- Sync to localStorage ---
  useEffect(() => {
    localStorage.setItem('zg_theme', JSON.stringify(themeMode));
    localStorage.setItem('zg_registered_users', JSON.stringify(registeredUsers));
    localStorage.setItem('zg_current_user', JSON.stringify(currentUser));
    localStorage.setItem('zg_active_tab', JSON.stringify(activeTab));
    localStorage.setItem('zg_area', JSON.stringify(selectedArea));
    localStorage.setItem('zg_chefs', JSON.stringify(chefs));
    localStorage.setItem('zg_cart', JSON.stringify(cart));
    localStorage.setItem('zg_orders', JSON.stringify(orders));
    localStorage.setItem('zg_bookings', JSON.stringify(bookings));
    localStorage.setItem('zg_favorites', JSON.stringify(favorites));
    localStorage.setItem('zg_cravings', JSON.stringify(cravings));
    localStorage.setItem('zg_tiffin', JSON.stringify(tiffinPlan));
  }, [
    themeMode,
    registeredUsers,
    currentUser,
    activeTab,
    selectedArea,
    chefs,
    cart,
    orders,
    bookings,
    favorites,
    cravings,
    tiffinPlan
  ]);

  // --- Batch Timer ---
  useEffect(() => {
    const timer = setInterval(() => {
      setBatchCountdownsSec((prev) => ({
        lunch: prev.lunch > 0 ? prev.lunch - 1 : 3600,
        dinner: prev.dinner > 0 ? prev.dinner - 1 : 3600
      }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatCountdown = (totalSecs) => {
    const mins = Math.floor(totalSecs / 60);
    const secs = totalSecs % 60;
    return `${String(mins).padStart(2, '0')}m ${String(secs).padStart(2, '0')}s`;
  };

  const getHomeDishPrepMins = (chef, dish) => {
    const originalChef = INITIAL_CHEFS.find((item) => item.id === chef.id);
    if (!originalChef) return dish.prepMins;
    const capacityChange =
      chef.lunchBatch.totalPlates - originalChef.lunchBatch.totalPlates +
      chef.dinnerBatch.totalPlates - originalChef.dinnerBatch.totalPlates;
    return Math.max(5, dish.prepMins + capacityChange * 2);
  };

  // --- Semantic Theme Tokens ---
  const ui = useMemo(() => {
    if (isDark) {
      return {
        pageBg: 'bg-[#090C0A] text-[#F8FAFC]',
        headerBg: 'bg-[#090C0A]/95 border-[#1E2922]',
        cardBg: 'bg-[#111613] border-[#1E2922]',
        cardHover: 'hover:border-[#22C55E]/50',
        subCardBg: 'bg-[#090C0A]/80 border-[#1E2922]',
        textPrimary: 'text-[#F8FAFC]',
        textMuted: 'text-[#94A3B8]',
        primaryBtn: 'bg-[#22C55E] text-[#090C0A] hover:bg-[#22C55E]/90',
        primaryBadge: 'bg-[#22C55E]/15 text-[#22C55E] border-[#22C55E]/35',
        secondaryBadge: 'bg-[#22C55E]/15 text-[#22C55E] border-[#22C55E]/35',
        accentText: 'text-[#22C55E]',
        inputBg: 'bg-[#111613] border-[#1E2922] text-[#F8FAFC] placeholder-[#94A3B8]',
        heroGradient: 'from-[#111613] via-[#131C16] to-[#090C0A]',
        offerPrimaryStrip: 'bg-[#22C55E] text-[#090C0A]',
        offerSecondaryStrip: 'bg-[#22C55E]/12 border-[#22C55E]/25 text-[#22C55E]'
      };
    }
    return {
      pageBg: 'bg-[#F8F9FA] text-[#1C1C1C]',
      headerBg: 'bg-white/95 border-[#EAECEF] shadow-sm shadow-black/[0.02]',
      cardBg: 'bg-white border-[#EAECEF] shadow-sm shadow-black/[0.03]',
      cardHover: 'hover:border-[#E23744]/40 hover:shadow-md hover:shadow-[#E23744]/[0.06]',
      subCardBg: 'bg-[#F8F9FA] border-[#EAECEF]',
      textPrimary: 'text-[#1C1C1C]',
      textMuted: 'text-[#686B78]',
      primaryBtn: 'bg-[#E23744] text-white hover:bg-[#CB202D] shadow-sm shadow-[#E23744]/20',
      primaryBadge: 'bg-[#FFF2F3] text-[#E23744] border-[#E23744]/25',
      secondaryBadge: 'bg-[#FFF6EE] text-[#FC8019] border-[#FC8019]/30',
      accentText: 'text-[#E23744]',
      inputBg: 'bg-[#F8F9FA] border-[#EAECEF] text-[#1C1C1C] placeholder-[#686B78]',
      heroGradient: 'from-[#FFF2F3] via-white to-[#FFF6EE]',
      offerPrimaryStrip: 'bg-gradient-to-r from-[#E23744] to-[#FC8019] text-white',
      offerSecondaryStrip: 'bg-[#FFF6EE] border-[#FC8019]/30 text-[#D95D00]'
    };
  }, [isDark]);

  // ============================================================================
  // 4. AUTHENTICATION HANDLERS (SIGN IN, REGISTER, 1-CLICK DEMO, SIGN OUT)
  // ============================================================================

  const openAuthGate = (reason = '', defaultTab = 'signin', defaultRole = 'customer') => {
    setAuthPromptReason(reason);
    setAuthTab(defaultTab);
    setAuthError('');
    setAuthForm((prev) => ({ ...prev, role: defaultRole }));
    setAuthModalOpen(true);
  };

  const requireAuth = (reason, requiredRole = null) => {
    if (!currentUser) {
      openAuthGate(
        reason,
        'signin',
        requiredRole === 'chef' ? 'chef' : 'customer'
      );
      return false;
    }
    if (requiredRole === 'chef' && currentUser.role !== 'chef') {
      openAuthGate(
        'Please sign in with a Home Chef Partner account to manage kitchen batches.',
        'signin',
        'chef'
      );
      return false;
    }
    return true;
  };

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    setAuthError('');

    if (authTab === 'signin') {
      const contactClean = authForm.contact.trim().toLowerCase();
      if (!contactClean || !authForm.password.trim()) {
        setAuthError('Please enter your Email/Mobile and Password.');
        return;
      }
      const matched = registeredUsers.find(
        (u) =>
          u.contact.toLowerCase() === contactClean &&
          u.password === authForm.password.trim()
      );
      if (!matched) {
        setAuthError(
          'Invalid credentials. Try registering a new account or click a 1-Click Demo Login below.'
        );
        return;
      }
      setCurrentUser(matched);
      setAuthModalOpen(false);
      if (matched.role === 'chef') {
        setActiveTab('chef-dashboard');
      }
      triggerToast(`Welcome back, ${matched.name}!`);
    } else {
      // Register new account
      if (!authForm.name.trim() || !authForm.contact.trim() || !authForm.password.trim()) {
        setAuthError('Please complete Full Name, Email/Mobile, and Password.');
        return;
      }
      const contactClean = authForm.contact.trim().toLowerCase();
      const exists = registeredUsers.some(
        (u) => u.contact.toLowerCase() === contactClean
      );
      if (exists) {
        setAuthError('An account with this Email or Mobile already exists. Please Sign In.');
        return;
      }
      const newUser = {
        id: `user-${Date.now()}`,
        name: authForm.name.trim(),
        contact: authForm.contact.trim(),
        password: authForm.password.trim(),
        role: authForm.role
      };
      setRegisteredUsers((prev) => [...prev, newUser]);
      setCurrentUser(newUser);
      setAuthModalOpen(false);
      if (newUser.role === 'chef') {
        setActiveTab('chef-dashboard');
      }
      triggerToast(`Account created! Welcome to Zest & Ghar, ${newUser.name}.`);
    }
  };

  const loginWithDemo = (role) => {
    const demoUser =
      registeredUsers.find((u) => u.role === role) ||
      DEMO_ACCOUNTS.find((u) => u.role === role);
    setCurrentUser(demoUser);
    setAuthModalOpen(false);
    setAuthError('');
    if (role === 'chef') {
      setActiveTab('chef-dashboard');
    } else if (activeTab === 'chef-dashboard') {
      setActiveTab('home-kitchens');
    }
    triggerToast(`Signed in as ${demoUser.name} (${role === 'chef' ? 'Home Chef' : 'Customer'})`);
  };

  const handleSignOut = () => {
    setCurrentUser(null);
    if (activeTab === 'chef-dashboard') {
      setActiveTab('home-kitchens');
    }
    triggerToast('Signed out safely');
  };

  // ============================================================================
  // 5. CART, PROMO CODES, GROUP BILL SPLITTER & ORDER PLACEMENT
  // ============================================================================

  const toggleFavorite = (id, label) => {
    setFavorites((prev) => {
      const exists = prev.includes(id);
      triggerToast(exists ? `Removed ${label} from saved` : `Saved ${label} to favorites`);
      return exists ? prev.filter((item) => item !== id) : [...prev, id];
    });
  };

  const openCustomizeModal = (dish, chef) => {
    setCustomizingDish({ dish, chef });
    setCustomOptions({
      oil: 'Low Oil',
      spice: 'Medium',
      extraGhee: false,
      grain: '3 Phulkas',
      notes: ''
    });
  };

  const confirmAddHomemadeDish = () => {
    if (!customizingDish) return;
    const { dish, chef } = customizingDish;
    const extraCost = customOptions.extraGhee ? 20 : 0;
    const finalPrice = dish.price + extraCost;

    const newItem = {
      cartId: `${dish.id}-${Date.now()}`,
      dishId: dish.id,
      chefId: chef.id,
      sourceName: chef.kitchenName,
      sourceType: 'home',
      image: dish.image,
      name: dish.name,
      price: finalPrice,
      qty: 1,
      customizations: { ...customOptions }
    };

    setCart((prev) => [...prev, newItem]);
    setCustomizingDish(null);
    triggerToast(`Added "${dish.name}" to your cart`);
  };

  const addDirectToCart = (item, sourceName, sourceType) => {
    setCart((prev) => {
      const existingIdx = prev.findIndex(
        (c) => c.dishId === item.id && c.sourceType === sourceType && !c.customizations
      );
      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx] = {
          ...updated[existingIdx],
          qty: updated[existingIdx].qty + 1
        };
        return updated;
      }
      return [
        ...prev,
        {
          cartId: `${item.id}-${Date.now()}`,
          dishId: item.id,
          sourceName,
          sourceType,
          image: item.image || HERO_IMAGES.homeThali,
          name: item.name,
          price: item.price,
          qty: 1,
          customizations: null
        }
      ];
    });
    triggerToast(`Added "${item.name}" to cart`);
  };

  const updateCartQty = (cartId, delta) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.cartId === cartId ? { ...item, qty: item.qty + delta } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const removeCartItem = (cartId) => {
    setCart((prev) => prev.filter((item) => item.cartId !== cartId));
    triggerToast('Item removed from cart');
  };

  const getProductCartQty = (productId) => {
    return cart
      .filter((c) => c.dishId === productId)
      .reduce((sum, c) => sum + c.qty, 0);
  };

  const updateProductQtyDirect = (product, delta) => {
    const existing = cart.find((c) => c.dishId === product.id);
    if (!existing && delta > 0) {
      addDirectToCart(product, product.maker, 'pantry');
    } else if (existing) {
      updateCartQty(existing.cartId, delta);
    }
  };

  // Cart Financial Breakdown
  const cartCalculations = useMemo(() => {
    const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
    const homeSubtotal = cart
      .filter((i) => i.sourceType === 'home')
      .reduce((acc, i) => acc + i.price * i.qty, 0);

    let deliveryFee = subtotal > 0 ? 40 : 0;
    let discount = 0;

    if (appliedPromo === 'ZEST50' && subtotal > 0) {
      discount = Math.min(Math.round(subtotal * 0.5), 100);
    } else if (appliedPromo === 'GHARKA20' && homeSubtotal > 0) {
      discount = Math.round(homeSubtotal * 0.2);
    } else if (appliedPromo === 'FREEDEL' && subtotal > 0) {
      deliveryFee = 0;
      discount = 40;
    }

    const effectiveDelivery = appliedPromo === 'FREEDEL' ? 0 : deliveryFee;
    const taxes = subtotal > 0 ? Math.round(subtotal * 0.05) : 0;
    const total = Math.max(0, subtotal + effectiveDelivery + taxes - discount);
    const splitCount = groupSplitEnabled ? 1 + groupFriends.length : 1;
    const perPersonShare = Math.ceil(total / splitCount);

    return {
      subtotal,
      deliveryFee: effectiveDelivery,
      taxes,
      discount,
      total,
      splitCount,
      perPersonShare
    };
  }, [cart, appliedPromo, groupSplitEnabled, groupFriends]);

  const handleApplyPromo = (codeOverride) => {
    const code = (codeOverride || promoCodeInput).trim().toUpperCase();
    if (!code) return;
    if (code === 'ZEST50') {
      setAppliedPromo('ZEST50');
      setPromoCodeInput('ZEST50');
      triggerToast('ZEST50 applied: 50% off up to ₹100!');
    } else if (code === 'GHARKA20') {
      const hasHome = cart.some((i) => i.sourceType === 'home');
      if (!hasHome) {
        triggerToast('Add a Home Kitchen dish to unlock GHARKA20');
        return;
      }
      setAppliedPromo('GHARKA20');
      setPromoCodeInput('GHARKA20');
      triggerToast('GHARKA20 applied: 20% off Home Kitchen items!');
    } else if (code === 'FREEDEL') {
      setAppliedPromo('FREEDEL');
      setPromoCodeInput('FREEDEL');
      triggerToast('FREEDEL applied: Zero delivery fee!');
    } else {
      triggerToast('Invalid code. Try ZEST50, GHARKA20, or FREEDEL');
    }
  };

  const handleAddFriendToSplit = (e) => {
    e.preventDefault();
    const cleaned = newFriendName.trim();
    if (!cleaned) return;
    if (!groupFriends.includes(cleaned)) {
      setGroupFriends((prev) => [...prev, cleaned]);
    }
    setNewFriendName('');
  };

  const handlePlaceOrder = () => {
    if (cart.length === 0) return;
    if (!requireAuth('Please sign in or create an account to place your order.')) {
      return;
    }

    const hasHome = cart.some((i) => i.sourceType === 'home');
    const newOrderId = `ZG-${Math.floor(1000 + Math.random() * 9000)}`;
    const newOtp = String(Math.floor(1000 + Math.random() * 9000));

    const newOrder = {
      id: newOrderId,
      customerName: currentUser.name,
      area: selectedArea,
      batchLabel: hasHome ? '1:00 PM Lunch Batch' : 'Express Delivery',
      isHomeKitchen: hasHome,
      otp: newOtp,
      status: 'Order Confirmed',
      total: cartCalculations.total,
      createdAt: 'Just now',
      items: cart.map((c) => ({
        name: c.name,
        qty: c.qty,
        price: c.price,
        customizations: c.customizations
      }))
    };

    // Deduct remaining batch plates on Home Kitchens
    if (hasHome) {
      setChefs((prevChefs) =>
        prevChefs.map((chef) => {
          const orderedFromChef = cart
            .filter((c) => c.chefId === chef.id)
            .reduce((sum, c) => sum + c.qty, 0);
          if (orderedFromChef > 0) {
            return {
              ...chef,
              lunchBatch: {
                ...chef.lunchBatch,
                bookedPlates: Math.min(
                  chef.lunchBatch.totalPlates,
                  chef.lunchBatch.bookedPlates + orderedFromChef
                )
              }
            };
          }
          return chef;
        })
      );
    }

    setOrders((prev) => [newOrder, ...prev]);
    setCart([]);
    setAppliedPromo(null);
    setPromoCodeInput('');
    setIsCartOpen(false);
    setActiveOrderTracker(newOrder);
    triggerToast(`Order ${newOrderId} placed! Live kitchen tracking started.`);
  };

  // ============================================================================
  // 6. FILTERED VIEWS & INTERACTIVE SUB-FLOWS
  // ============================================================================

  const resetAllFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setDietaryFilters({
      pureVeg: false,
      jain: false,
      highProtein: false,
      under30: false,
      favoritesOnly: false
    });
    setDineoutAmbience('All Venues');
    setPantryCategory('All Staples');
    triggerToast('All filters cleared');
  };

  const hasActiveGlobalFilters =
    Boolean(searchQuery) ||
    selectedCategory !== 'All' ||
    dietaryFilters.pureVeg ||
    dietaryFilters.jain ||
    dietaryFilters.highProtein ||
    dietaryFilters.under30 ||
    dietaryFilters.favoritesOnly;

  const filteredChefs = useMemo(() => {
    return chefs
      .map((chef) => {
        const matchingDishes = chef.dishes.filter((dish) => {
          const matchesSearch =
            !searchQuery ||
            dish.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            chef.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            chef.kitchenName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            chef.specialty.toLowerCase().includes(searchQuery.toLowerCase());
          const matchesCat =
            selectedCategory === 'All' || dish.category === selectedCategory;
          const matchesVeg = !dietaryFilters.pureVeg || dish.isVeg;
          const matchesJain = !dietaryFilters.jain || dish.isJain;
          const matchesProtein = !dietaryFilters.highProtein || dish.highProtein;
          const matchesTime = !dietaryFilters.under30 || getHomeDishPrepMins(chef, dish) <= 30;
          return (
            matchesSearch &&
            matchesCat &&
            matchesVeg &&
            matchesJain &&
            matchesProtein &&
            matchesTime
          );
        });
        return { ...chef, filteredDishes: matchingDishes };
      })
      .filter((chef) => {
        const favOk = !dietaryFilters.favoritesOnly || favorites.includes(chef.id);
        return favOk && chef.filteredDishes.length > 0;
      });
  }, [chefs, searchQuery, selectedCategory, dietaryFilters, favorites]);

  const filteredRestaurants = useMemo(() => {
    return EXPANDED_RESTAURANTS_DATA.map((rest) => {
      const matchingMenu = rest.menu.filter((item) => {
        const matchesSearch =
          !searchQuery ||
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          rest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          rest.cuisines.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCat =
          selectedCategory === 'All' || item.category === selectedCategory;
        const matchesVeg = !dietaryFilters.pureVeg || item.isVeg;
        const matchesJain = !dietaryFilters.jain || item.isJain;
        const matchesProtein = !dietaryFilters.highProtein || item.highProtein;
        const matchesTime = !dietaryFilters.under30 || rest.etaMins <= 30;
        return (
          matchesSearch &&
          matchesCat &&
          matchesVeg &&
          matchesJain &&
          matchesProtein &&
          matchesTime
        );
      });
      return { ...rest, filteredMenu: matchingMenu };
    }).filter((rest) => {
      const favOk = !dietaryFilters.favoritesOnly || favorites.includes(rest.id);
      return favOk && rest.filteredMenu.length > 0;
    });
  }, [searchQuery, selectedCategory, dietaryFilters, favorites]);

  const filteredDineoutVenues = useMemo(() => {
    return DINEOUT_VENUES.filter((v) => {
      const matchesAmbience =
        dineoutAmbience === 'All Venues' || v.ambience.includes(dineoutAmbience);
      const matchesSearch =
        !searchQuery ||
        v.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        v.cuisines.toLowerCase().includes(searchQuery.toLowerCase()) ||
        v.location.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesAmbience && matchesSearch;
    }).sort((a, b) => {
      if (dineoutSort === 'rating') return b.rating - a.rating;
      if (dineoutSort === 'cost') return a.costForTwoNum - b.costForTwoNum;
      return a.distanceKm - b.distanceKm;
    });
  }, [dineoutAmbience, dineoutSort, searchQuery]);

  const filteredPantryProducts = useMemo(() => {
    return PANTRY_PRODUCTS.filter((p) => {
      const matchesCat =
        pantryCategory === 'All Staples' || p.category === pantryCategory;
      const matchesSearch =
        !searchQuery ||
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.maker.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesJain = !dietaryFilters.jain || p.isJain;
      return matchesCat && matchesSearch && matchesJain;
    });
  }, [pantryCategory, searchQuery, dietaryFilters.jain]);

  // --- Dineout Reservation Confirmation ---
  const handleConfirmTableReservation = () => {
    if (!bookingVenue) return;
    if (!requireAuth('Sign in or create an account to confirm your table reservation.')) {
      return;
    }
    const bookingCode = `ZG-TBL-${Math.floor(1000 + Math.random() * 9000)}`;
    const newBooking = {
      id: `BK-${Date.now()}`,
      code: bookingCode,
      userName: currentUser.name,
      venueName: bookingVenue.name,
      location: bookingVenue.location,
      date: bookingForm.date,
      slot: bookingForm.slot,
      guests: bookingForm.guests,
      zone: bookingForm.zone,
      offer: bookingVenue.offerPrimary
    };
    setBookings((prev) => [newBooking, ...prev]);
    setBookingVenue(null);
    setIsHistoryOpen(true);
    triggerToast(`Table confirmed at ${bookingVenue.name}! Code: ${bookingCode}`);
  };

  // --- Tiffin Subscription Stats ---
  const tiffinStats = useMemo(() => {
    const totalDays = tiffinPlan.duration === 'weekly' ? 7 : 28;
    const validWeekdays = tiffinPlan.duration === 'weekly' ? 5 : 22;
    const pausedCount = tiffinPlan.pausedDays.filter((d) => d <= totalDays).length;
    const activeMeals =
      Math.max(1, validWeekdays - pausedCount) * (tiffinPlan.slot === 'Both' ? 2 : 1);
    const ratePerMeal = tiffinPlan.duration === 'monthly' ? 145 : 165;
    const totalPrice = activeMeals * ratePerMeal;
    return { totalDays, activeMeals, pausedCount, ratePerMeal, totalPrice };
  }, [tiffinPlan]);

  const toggleTiffinDay = (dayNum) => {
    setTiffinPlan((prev) => {
      const isPaused = prev.pausedDays.includes(dayNum);
      return {
        ...prev,
        pausedDays: isPaused
          ? prev.pausedDays.filter((d) => d !== dayNum)
          : [...prev.pausedDays, dayNum]
      };
    });
  };

  // --- Craving Board Actions ---
  const toggleUpvoteCraving = (id) => {
    setCravings((prev) =>
      prev.map((c) =>
        c.id === id
          ? {
              ...c,
              upvoted: !c.upvoted,
              votes: c.upvoted ? c.votes - 1 : c.votes + 1
            }
          : c
      )
    );
  };

  const handlePostCraving = (e) => {
    e.preventDefault();
    if (!newCravingDish.trim()) return;
    if (!requireAuth('Sign in or create an account to post a dish craving.')) {
      return;
    }
    const item = {
      id: `crav-${Date.now()}`,
      dish: newCravingDish.trim(),
      requestedBy: `${currentUser.name} • ${selectedArea}`,
      notes:
        newCravingNote.trim() ||
        'Looking for fresh small-batch homemade preparation.',
      votes: 1,
      upvoted: true,
      acceptedByChef: false
    };
    setCravings((prev) => [item, ...prev]);
    setNewCravingDish('');
    setNewCravingNote('');
    triggerToast('Craving posted! Local home chefs notified.');
  };

  // --- Chef Dashboard Actions ---
  const primaryChef = chefs[0];

  const handleSelectNavTab = (tabId) => {
    if (tabId === 'chef-dashboard') {
      if (!requireAuth('Sign in with a Home Chef Partner account to open the Kitchen Dashboard.', 'chef')) {
        return;
      }
    }
    setActiveTab(tabId);
  };

  const togglePrimaryChefLive = () => {
    setChefs((prev) =>
      prev.map((c, idx) =>
        idx === 0 ? { ...c, kitchenLive: !c.kitchenLive } : c
      )
    );
    triggerToast(
      primaryChef.kitchenLive
        ? 'Kitchen paused on Customer App'
        : 'Kitchen is now LIVE to neighborhood diners!'
    );
  };

  const adjustBatchCapacity = (batchKey, delta) => {
    setChefs((prev) =>
      prev.map((c, idx) => {
        if (idx !== 0) return c;
        const batch = c[batchKey];
        const nextTotal = Math.max(batch.bookedPlates, batch.totalPlates + delta);
        return {
          ...c,
          [batchKey]: { ...batch, totalPlates: nextTotal }
        };
      })
    );
    const countdownKey = batchKey === 'lunchBatch' ? 'lunch' : 'dinner';
    setBatchCountdownsSec((prev) => ({
      ...prev,
      [countdownKey]: Math.max(60, prev[countdownKey] + delta * 300)
    }));
  };

  const toggleBatchClosedEarly = (batchKey) => {
    setChefs((prev) =>
      prev.map((c, idx) => {
        if (idx !== 0) return c;
        const batch = c[batchKey];
        return {
          ...c,
          [batchKey]: { ...batch, isOpen: !batch.isOpen }
        };
      })
    );
    triggerToast('Batch availability updated across Customer App');
  };

  const advanceOrderStatus = (orderId) => {
    const flow = [
      'Order Confirmed',
      'Chef Preparing',
      'Packed & Sealed',
      'Out for Delivery',
      'Delivered'
    ];
    setOrders((prev) =>
      prev.map((ord) => {
        if (ord.id !== orderId) return ord;
        const idx = flow.indexOf(ord.status);
        const nextStatus = flow[Math.min(flow.length - 1, idx + 1)];
        if (activeOrderTracker?.id === orderId) {
          setActiveOrderTracker({ ...ord, status: nextStatus });
        }
        triggerToast(`Order ${orderId} updated to "${nextStatus}"`);
        return { ...ord, status: nextStatus };
      })
    );
  };

  const acceptCravingAsSpecialBatch = (craving) => {
    if (craving.acceptedByChef) return;
    setCravings((prev) =>
      prev.map((c) => (c.id === craving.id ? { ...c, acceptedByChef: true } : c))
    );
    const specialDish = {
      id: `special-${Date.now()}`,
      name: `${craving.dish} (Community Special Batch)`,
      category: 'South Indian',
      price: 210,
      image:
        'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=500&q=80',
      description: `Requested by ${craving.votes} neighbors: ${craving.notes}`,
      isVeg: true,
      isJain: false,
      highProtein: false,
      prepMins: 25
    };
    setChefs((prev) =>
      prev.map((c, idx) =>
        idx === 0 ? { ...c, dishes: [specialDish, ...c.dishes] } : c
      )
    );
    triggerToast(`Published "${craving.dish}" live to Customer Home Kitchens!`);
  };

  const consolidatedPrep = useMemo(() => {
    const activeHomeOrders = orders.filter(
      (o) => o.isHomeKitchen && o.status !== 'Delivered'
    );
    let lowOilCount = 0;
    let mildSpiceCount = 0;
    let extraGheeCount = 0;

    activeHomeOrders.forEach((ord) => {
      ord.items.forEach((it) => {
        if (it.customizations?.oil === 'Low Oil') lowOilCount += it.qty;
        if (it.customizations?.spice === 'Mild') mildSpiceCount += it.qty;
        if (it.customizations?.extraGhee) extraGheeCount += it.qty;
      });
    });

    return { lowOilCount, mildSpiceCount, extraGheeCount };
  }, [orders]);

  const chefEarnings = useMemo(() => {
    const baseline = 3450;
    const liveOrdersTotal = orders
      .filter((o) => o.isHomeKitchen)
      .reduce((sum, o) => sum + o.total, 0);
    return baseline + liveOrdersTotal;
  }, [orders]);

  const totalCartItems = cart.reduce((sum, item) => sum + item.qty, 0);

  const searchableItems = useMemo(() => [
    ...chefs.map((chef) => ({ id: chef.id, name: chef.kitchenName, kind: 'kitchen', tab: 'home-kitchens' })),
    ...chefs.flatMap((chef) => chef.dishes.map((item) => ({
      id: item.id, name: item.name, kind: 'dish', tab: 'home-kitchens', item,
      sourceName: chef.kitchenName, sourceType: 'home', chef
    }))),
    ...EXPANDED_RESTAURANTS_DATA.flatMap((restaurant) => restaurant.menu.map((item) => ({
      id: item.id, name: item.name, kind: 'dish', tab: 'restaurants', item,
      sourceName: restaurant.name, sourceType: 'restaurant'
    }))),
    ...EXPANDED_RESTAURANTS_DATA.map((restaurant) => ({ id: restaurant.id, name: restaurant.name, kind: 'restaurant', tab: 'restaurants' })),
    ...DINEOUT_VENUES.map((venue) => ({ id: venue.id, name: venue.name, kind: 'venue', tab: 'dineout' })),
    ...PANTRY_PRODUCTS.map((item) => ({ id: item.id, name: item.name, kind: 'product', tab: 'pantry', item, sourceName: item.maker, sourceType: 'pantry' })),
    ...TRAIN_STATIONS.flatMap((station) => station.meals.map((item) => ({
      id: item.id, name: item.name, kind: 'dish', tab: 'train', item,
      sourceName: `${station.name} • ${item.kitchen}`, sourceType: 'train'
    })))
  ], [chefs]);

  const searchSuggestions = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query || !showSearchSuggestions) return [];
    return searchableItems
      .filter((entry) => entry.name.toLowerCase().includes(query))
      .slice(0, 7);
  }, [searchQuery, searchableItems, showSearchSuggestions]);

  const selectSearchSuggestion = (entry) => {
    setActiveTab(entry.tab);
    setSelectedCategory('All');
    setSearchQuery(entry.name);
    setShowSearchSuggestions(false);
    if (entry.item && entry.kind === 'dish') {
      setSelectedDishDetail(entry);
    }
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchSuggestions[0]) selectSearchSuggestion(searchSuggestions[0]);
    else setShowSearchSuggestions(false);
  };

  const openDishDetail = (item, sourceName, sourceType, chef = null) => {
    setSelectedDishDetail({ item, sourceName, sourceType, chef, kind: 'dish' });
  };

  const renderSearchSuggestions = () => searchSuggestions.length > 0 && (
    <div role="listbox" aria-label="Search suggestions" className={`absolute left-0 right-0 top-full mt-2 z-50 max-h-80 overflow-y-auto rounded-2xl border p-2 shadow-xl ${ui.cardBg}`}>
      {searchSuggestions.map((entry) => (
        <button
          key={`${entry.kind}-${entry.id}`}
          type="button"
          role="option"
          aria-selected="false"
          onMouseDown={(event) => event.preventDefault()}
          onClick={() => selectSearchSuggestion(entry)}
          className={`w-full rounded-xl px-3 py-2.5 text-left flex items-center justify-between gap-3 ${ui.cardHover}`}
        >
          <span className={`text-sm font-semibold truncate ${ui.textPrimary}`}>{entry.name}</span>
          <span className={`shrink-0 text-[10px] font-bold uppercase ${ui.accentText}`}>
            {entry.kind === 'product' ? 'Pantry' : entry.kind === 'venue' ? 'Dineout' : entry.tab === 'train' ? 'Train' : entry.tab === 'restaurants' ? 'Restaurant' : entry.kind === 'dish' ? 'Dish' : 'Home Kitchen'}
          </span>
        </button>
      ))}
    </div>
  );

  // ============================================================================
  // 7. RENDER UI
  // ============================================================================

  return (
    <div
      className={`min-h-screen font-sans antialiased transition-colors duration-300 pb-28 md:pb-0 ${ui.pageBg}`}
    >
      {/* Floating Toast Notification */}
      {toast && (
        <div
          className={`fixed top-20 right-4 sm:right-8 z-[60] flex items-center gap-3 px-4 py-3 rounded-2xl border shadow-2xl ${
            isDark
              ? 'bg-[#111613] border-[#22C55E]/50 text-[#F8FAFC]'
              : 'bg-white border-[#E23744]/40 text-[#1C1C1C]'
          }`}
        >
          <span
            className={`w-2.5 h-2.5 rounded-full animate-pulse ${
              isDark ? 'bg-[#22C55E]' : 'bg-[#E23744]'
            }`}
          />
          <p className="text-sm font-semibold">{toast}</p>
        </div>
      )}

      {/* ======================================================================
          STICKY TOP HEADER (LOCATION + SEARCH + THEME + USER AUTH + WORKING CART)
         ====================================================================== */}
      <header
        className={`sticky top-0 z-40 backdrop-blur-xl border-b transition-colors ${ui.headerBg}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between gap-3">
          {/* Brand Logo + Location Selector */}
          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={() => setActiveTab('home-kitchens')}
              className="flex items-center gap-2.5 text-left group"
            >
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold shadow-sm transition-transform group-hover:scale-105 ${
                  isDark
                    ? 'bg-[#22C55E]/15 border border-[#22C55E]/40 text-[#22C55E]'
                    : 'bg-gradient-to-br from-[#E23744] to-[#FC8019] text-white'
                }`}
              >
                <Utensils className="w-5 h-5" />
              </div>
              <div>
                <div className={`text-lg sm:text-xl font-extrabold tracking-tight leading-none ${ui.textPrimary}`}>
                  Zest <span className={isDark ? 'text-[#22C55E]' : 'text-[#E23744]'}>&amp;</span> Ghar
                </div>
                <div
                  className={`text-[10px] font-semibold uppercase tracking-[0.15em] mt-1 ${
                    isDark ? 'text-[#22C55E]' : 'text-[#FC8019]'
                  }`}
                >
                  Dining &amp; Home Chefs
                </div>
              </div>
            </button>

            {/* Location Selector Dropdown */}
            <div
              className={`hidden xl:flex items-center gap-2 pl-4 border-l ${
                isDark ? 'border-[#1E2922]' : 'border-[#EAECEF]'
              }`}
            >
              <MapPin className={`w-4 h-4 shrink-0 ${ui.accentText}`} />
              <div>
                <span className={`block text-[10px] uppercase tracking-wider ${ui.textMuted}`}>
                  Location
                </span>
                <select
                  aria-label="Select neighborhood"
                  value={selectedArea}
                  onChange={(e) => {
                    setSelectedArea(e.target.value);
                    triggerToast(`Location updated to ${e.target.value}`);
                  }}
                  className={`bg-transparent text-xs font-bold focus:outline-none cursor-pointer pr-2 ${ui.textPrimary}`}
                >
                  {LOCATIONS_LIST.map((loc) => (
                    <option
                      key={loc}
                      value={loc}
                      className={isDark ? 'bg-[#111613]' : 'bg-white'}
                    >
                      {loc}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Search Input */}
          <div className="hidden md:flex flex-1 max-w-md mx-2">
            <form onSubmit={handleSearchSubmit} className="relative w-full">
              <button type="submit" aria-label="Search" className={`absolute left-4 top-1/2 -translate-y-1/2 ${ui.textMuted}`}>
                <Search className="w-4 h-4" />
              </button>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowSearchSuggestions(true);
                }}
                onFocus={() => setShowSearchSuggestions(true)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && searchSuggestions[0]) {
                    e.preventDefault();
                    selectSearchSuggestion(searchSuggestions[0]);
                  }
                  if (e.key === 'Escape') setShowSearchSuggestions(false);
                }}
                aria-autocomplete="list"
                aria-expanded={searchSuggestions.length > 0}
                role="combobox"
                placeholder="Search dishes, home chefs, dineout, pantry..."
                className={`w-full pl-11 pr-9 py-2.5 rounded-full border text-sm focus:outline-none transition-colors ${
                  ui.inputBg
                } ${isDark ? 'focus:border-[#22C55E]' : 'focus:border-[#E23744]'}`}
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setShowSearchSuggestions(false);
                  }}
                  className={`absolute right-3.5 top-1/2 -translate-y-1/2 ${ui.textMuted}`}
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
              {renderSearchSuggestions()}
            </form>
          </div>

          {/* Right Controls: Dual Theme Switcher + User Auth Pill + Orders/Bookings + WORKING CART BUTTON */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Dual Theme Switcher */}
            <div
              className={`hidden sm:flex items-center p-1 rounded-full border ${
                isDark
                  ? 'bg-[#111613] border-[#1E2922]'
                  : 'bg-[#F8F9FA] border-[#EAECEF]'
              }`}
            >
              <button
                onClick={() => setThemeMode('zomato')}
                title="Red, Orange & White Theme"
                className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold transition-all ${
                  !isDark
                    ? 'bg-gradient-to-r from-[#E23744] to-[#FC8019] text-white shadow-sm'
                    : 'text-[#94A3B8] hover:text-white'
                }`}
              >
                <Sun className="w-3 h-3" />
                <span className="hidden lg:inline">Red &amp; Orange</span>
              </button>
              <button
                onClick={() => setThemeMode('dark')}
                title="Obsidian Dark Theme"
                className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold transition-all ${
                  isDark
                    ? 'bg-[#22C55E] text-[#090C0A] shadow-sm'
                    : 'text-[#686B78] hover:text-[#1C1C1C]'
                }`}
              >
                <Moon className="w-3 h-3" />
                <span className="hidden lg:inline">Dark</span>
              </button>
            </div>

            {/* Auth State: Signed In User Pill vs Sign In / Register Button */}
            {currentUser ? (
              <div className="flex items-center gap-1.5 sm:gap-2">
                <button
                  onClick={() => setIsHistoryOpen(true)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-full border text-xs font-bold transition-all ${ui.cardBg} ${ui.textPrimary}`}
                  title="My Orders & Table Bookings"
                >
                  <Receipt className={`w-3.5 h-3.5 ${ui.accentText}`} />
                  <span className="hidden lg:inline">Orders &amp; Bookings</span>
                  <span
                    className={`px-1.5 py-0.2 rounded-full text-[10px] font-extrabold ${ui.primaryBadge}`}
                  >
                    {orders.length + bookings.length}
                  </span>
                </button>

                <div
                  className={`hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs ${ui.subCardBg}`}
                >
                  <span
                    className={`w-6 h-6 rounded-full flex items-center justify-center font-extrabold text-[11px] ${
                      isDark
                        ? 'bg-[#22C55E] text-[#090C0A]'
                        : 'bg-[#E23744] text-white'
                    }`}
                  >
                    {currentUser.name.charAt(0).toUpperCase()}
                  </span>
                  <div className="leading-tight">
                    <div className={`font-bold max-w-[95px] truncate ${ui.textPrimary}`}>
                      {currentUser.name.split(' ')[0]}
                    </div>
                    <div
                      className={`text-[9px] font-bold uppercase ${
                        currentUser.role === 'chef'
                          ? 'text-[#16A34A]'
                          : isDark
                          ? 'text-[#22C55E]'
                          : 'text-[#FC8019]'
                      }`}
                    >
                      {currentUser.role === 'chef' ? 'Home Chef' : 'Customer'}
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleSignOut}
                  title="Sign Out"
                  className={`p-2.5 rounded-full border transition-colors ${ui.cardBg} ${ui.textMuted} hover:text-[#E23744]`}
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => openAuthGate('', 'signin')}
                className={`flex items-center gap-1.5 px-3.5 py-2.5 rounded-full border text-xs font-bold transition-all ${ui.cardBg} ${ui.textPrimary} ${ui.cardHover}`}
              >
                <LogIn className={`w-3.5 h-3.5 ${ui.accentText}`} />
                <span>Sign In / Register</span>
              </button>
            )}

            {/* WORKING TOP HEADER CART BUTTON */}
            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              aria-label="Open Cart Drawer"
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all cursor-pointer ${ui.primaryBtn}`}
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline">Cart</span>
              <span
                className={`px-1.5 py-0.5 rounded-full text-[11px] font-extrabold ${
                  isDark
                    ? 'bg-[#090C0A] text-[#22C55E]'
                    : 'bg-white text-[#E23744]'
                }`}
              >
                {totalCartItems}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Location & Search Sub-Bar */}
        <div
          className={`md:hidden px-4 pb-3 space-y-2.5 border-t pt-2.5 ${
            isDark ? 'border-[#1E2922]/60' : 'border-[#EAECEF]'
          }`}
        >
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-1.5">
              <MapPin className={`w-3.5 h-3.5 ${ui.accentText}`} />
              <select
                value={selectedArea}
                onChange={(e) => setSelectedArea(e.target.value)}
                className={`bg-transparent font-bold focus:outline-none ${ui.textPrimary}`}
              >
                {LOCATIONS_LIST.map((loc) => (
                  <option
                    key={loc}
                    value={loc}
                    className={isDark ? 'bg-[#111613]' : 'bg-white'}
                  >
                    {loc}
                  </option>
                ))}
              </select>
            </div>
            <button
              onClick={() => setThemeMode(isDark ? 'zomato' : 'dark')}
              className={`font-bold ${ui.accentText}`}
            >
              {isDark ? 'Switch to Red & Orange' : 'Switch to Dark'}
            </button>
          </div>
          <form onSubmit={handleSearchSubmit} className="relative">
            <button type="submit" aria-label="Search" className={`absolute left-3.5 top-1/2 -translate-y-1/2 ${ui.textMuted}`}>
              <Search className="w-4 h-4" />
            </button>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowSearchSuggestions(true);
              }}
              onFocus={() => setShowSearchSuggestions(true)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && searchSuggestions[0]) {
                  e.preventDefault();
                  selectSearchSuggestion(searchSuggestions[0]);
                }
                if (e.key === 'Escape') setShowSearchSuggestions(false);
              }}
              aria-autocomplete="list"
              aria-expanded={searchSuggestions.length > 0}
              role="combobox"
              placeholder="Search dishes, home chefs, dineout, pantry..."
              className={`w-full pl-10 pr-4 py-2 rounded-full border text-xs focus:outline-none ${ui.inputBg}`}
            />
            {renderSearchSuggestions()}
          </form>
        </div>
      </header>

      {/* ======================================================================
          LIVE ORDER STATUS TRACKER BAR
         ====================================================================== */}
      {orders.length > 0 && activeTab !== 'chef-dashboard' && (
        <div
          className={`border-b ${
            isDark
              ? 'bg-[#111613] border-[#22C55E]/30'
              : 'bg-[#FFF2F3] border-[#E23744]/20'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-8 py-2.5 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3 text-xs sm:text-sm">
              <span
                className={`w-2.5 h-2.5 rounded-full animate-ping ${
                  isDark ? 'bg-[#22C55E]' : 'bg-[#E23744]'
                }`}
              />
              <div>
                <span className={ui.textMuted}>Active Order </span>
                <strong className={ui.textPrimary}>{orders[0].id}</strong>
                <span className="mx-2 opacity-30">•</span>
                <span className={`font-bold ${ui.accentText}`}>
                  {orders[0].status}
                </span>
                <span className={`hidden sm:inline ml-2 ${ui.textMuted}`}>
                  (Handover OTP: <strong className={ui.textPrimary}>{orders[0].otp}</strong>)
                </span>
              </div>
            </div>
            <button
              onClick={() => setActiveOrderTracker(orders[0])}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${ui.primaryBtn}`}
            >
              Track Live Order
            </button>
          </div>
        </div>
      )}

      {/* ======================================================================
          MAIN CONTENT AREA
         ====================================================================== */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* 1. HERO BANNER (HIDDEN IN CHEF DASHBOARD) */}
        {activeTab !== 'chef-dashboard' &&
          (showHero ? (
            <section
              className={`my-7 p-6 sm:p-9 rounded-3xl border bg-gradient-to-br ${
                ui.heroGradient
              } ${isDark ? 'border-[#1E2922]' : 'border-[#EAECEF] shadow-sm'}`}
            >
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${ui.primaryBadge}`}
                    >
                      <Flame className="w-3.5 h-3.5" />
                      <span>Restaurants • Home Kitchens • Dineout • Pantry</span>
                    </span>
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${ui.secondaryBadge}`}
                    >
                      <ShieldCheck className="w-3.5 h-3.5 text-[#16A34A]" />
                      <span>FSSAI &amp; Live Video-Audited Home Chefs</span>
                    </span>
                  </div>

                  <h1
                    className={`text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.12] ${ui.textPrimary}`}
                  >
                    Restaurant Favorites &amp; Authentic{' '}
                    <span
                      className={
                        isDark
                          ? 'text-[#22C55E]'
                          : 'bg-gradient-to-r from-[#E23744] to-[#FC8019] bg-clip-text text-transparent'
                      }
                    >
                      Homemade Meals
                    </span>
                    , All in One App.
                  </h1>

                  <p className={`text-sm sm:text-base max-w-2xl leading-relaxed ${ui.textMuted}`}>
                    {currentUser
                      ? `Welcome back, ${currentUser.name}! Explore small-batch home kitchens in ${selectedArea}, book rooftop dineout tables, or restock fresh pantry staples.`
                      : 'Sign in or create a free account to order customized home-cooked thalis, reserve Dineout tables with 50% GIRF offers, or open your own Home Chef Kitchen.'}
                  </p>

                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    {!currentUser ? (
                      <button
                        onClick={() => openAuthGate('', 'register')}
                        className={`px-6 py-3.5 rounded-full font-bold text-sm flex items-center gap-2 transition-all ${ui.primaryBtn}`}
                      >
                        <UserPlus className="w-4 h-4" />
                        <span>Create Free Account</span>
                      </button>
                    ) : (
                      <button
                        onClick={() => setActiveTab('home-kitchens')}
                        className={`px-6 py-3.5 rounded-full font-bold text-sm flex items-center gap-2 transition-all ${ui.primaryBtn}`}
                      >
                        <span>Explore Home Kitchens</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    )}

                    <button
                      onClick={() => setShowTiffinModal(true)}
                      className={`px-5 py-3.5 rounded-full border font-bold text-sm flex items-center gap-2 transition-all ${
                        isDark
                          ? 'bg-[#111613] border-[#1E2922] text-[#F8FAFC] hover:border-[#22C55E]'
                          : 'bg-white border-[#EAECEF] text-[#1C1C1C] hover:border-[#FC8019]'
                      }`}
                    >
                      <Calendar
                        className={`w-4 h-4 ${
                          isDark ? 'text-[#22C55E]' : 'text-[#FC8019]'
                        }`}
                      />
                      <span>Build Tiffin Plan</span>
                    </button>

                    <button
                      onClick={() => setShowHero(false)}
                      className={`text-xs underline underline-offset-4 px-2 py-2 ${ui.textMuted}`}
                    >
                      Hide Banner
                    </button>
                  </div>
                </div>

                {/* Right Photo Collage */}
                <div className="lg:col-span-5">
                  <div className="grid grid-cols-12 gap-3.5 items-stretch">
                    <div className="col-span-7 relative rounded-2xl overflow-hidden group h-64 shadow-md">
                      <FoodImage
                        src={HERO_IMAGES.mainFeast}
                        alt="Grand Indian Thali & Curry Spread"
                        className="w-full h-full"
                        imgClassName="group-hover:scale-105"
                        fallbackLabel="Artisanal Thali Spread"
                        isDark={isDark}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 flex flex-col justify-end">
                        <span className="inline-block w-fit px-2.5 py-0.5 rounded-md bg-[#E23744] text-white text-[10px] font-bold uppercase tracking-wider mb-1">
                          Live Lunch Batch
                        </span>
                        <p className="text-white font-bold text-sm">
                          Cutoff in {formatCountdown(batchCountdownsSec.lunch)}
                        </p>
                      </div>
                    </div>

                    <div className="col-span-5 flex flex-col gap-3.5">
                      <div className="relative rounded-2xl overflow-hidden group flex-1 shadow-md">
                        <FoodImage
                          src={HERO_IMAGES.biryaniHandi}
                          alt="Royal Dum Biryani Handi"
                          className="w-full h-full"
                          imgClassName="group-hover:scale-105"
                          fallbackLabel="Dum Biryani"
                          isDark={isDark}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent p-3 flex flex-col justify-end">
                          <span className="text-white text-xs font-bold">
                            Seeraga &amp; Dum Biryani
                          </span>
                          <span className="text-white/80 text-[10px]">From ₹210</span>
                        </div>
                      </div>

                      <div
                        className={`p-3.5 rounded-2xl border flex flex-col justify-center ${ui.cardBg}`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-extrabold text-[#16A34A]">
                            4.9 ★
                          </span>
                          <span
                            className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${ui.secondaryBadge}`}
                          >
                            685+ Cities
                          </span>
                        </div>
                        <p className={`text-[11px] mt-1 ${ui.textMuted}`}>
                          Verified Home Kitchens &amp; Top Restaurants
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ) : (
            <div className="pt-5 flex justify-end">
              <button
                onClick={() => setShowHero(true)}
                className={`text-xs flex items-center gap-1.5 font-bold ${ui.accentText}`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Show Featured Hero</span>
              </button>
            </div>
          ))}

        {/* 2. PRIMARY 6-TAB VERTICAL SWITCHER */}
        <section
          className={`py-5 border-y space-y-5 ${
            isDark ? 'border-[#1E2922]' : 'border-[#EAECEF]'
          }`}
        >
          <div className="flex items-center gap-2.5 overflow-x-auto pb-1">
            {[
              {
                id: 'restaurants',
                label: 'Restaurants',
                badge: 'Fast Delivery',
                icon: Utensils
              },
              {
                id: 'home-kitchens',
                label: 'Home Kitchens',
                badge: 'Ghar Ka Khana',
                icon: ChefHat
              },
              {
                id: 'dineout',
                label: 'Dineout',
                badge: 'Table Booking',
                icon: Sparkles
              },
              {
                id: 'pantry',
                label: 'Fresh Pantry',
                badge: '15-Min Staples',
                icon: Store
              },
              {
                id: 'train',
                label: 'Food on Train',
                badge: 'PNR Seat Drop',
                icon: Train
              },
              {
                id: 'chef-dashboard',
                label: 'Chef Dashboard',
                badge: 'Partner Portal',
                icon: ShieldCheck
              }
            ].map((tab) => {
              const Icon = tab.icon;
              const active = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleSelectNavTab(tab.id)}
                  className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl border text-sm font-bold shrink-0 transition-all ${
                    active
                      ? isDark
                        ? 'bg-[#22C55E] text-[#090C0A] border-[#22C55E]'
                        : 'bg-[#E23744] text-white border-[#E23744] shadow-md shadow-[#E23744]/20'
                      : `${ui.cardBg} ${ui.textPrimary} ${ui.cardHover}`
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${
                      active
                        ? 'bg-black/15 text-current'
                        : isDark
                        ? 'bg-[#161D19] text-[#94A3B8]'
                        : 'bg-[#FFF6EE] text-[#FC8019]'
                    }`}
                  >
                    {tab.badge}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Circular Dish Carousel & Dietary Filter Pills (Shown on Food Tabs) */}
          {(activeTab === 'home-kitchens' || activeTab === 'restaurants') && (
            <>
              <div className="flex items-center gap-5 sm:gap-6 overflow-x-auto py-2">
                {DISH_CATEGORIES.map((cat) => {
                  const isActive = selectedCategory === cat.id;
                  return (
                    <button
                      type="button"
                      key={cat.id}
                      aria-pressed={isActive}
                      onClick={() => setSelectedCategory(cat.id)}
                      className="group flex flex-col items-center shrink-0 focus:outline-none"
                    >
                      <div
                        className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full p-0.5 transition-all duration-300 ${
                          isActive
                            ? isDark
                              ? 'ring-2 ring-[#22C55E] scale-105'
                              : 'ring-2 ring-[#E23744] scale-105'
                            : 'group-hover:scale-105'
                        }`}
                      >
                        <FoodImage
                          src={cat.image}
                          alt={cat.label}
                          className="w-full h-full rounded-full shadow-sm"
                          imgClassName="group-hover:scale-110"
                          fallbackLabel={cat.label}
                          isDark={isDark}
                        />
                      </div>
                      <span
                        className={`mt-2 text-xs font-bold transition-colors ${
                          isActive ? ui.accentText : ui.textPrimary
                        }`}
                      >
                        {cat.label}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={`text-xs font-semibold flex items-center gap-1.5 mr-1 ${ui.textMuted}`}
                  >
                    <SlidersHorizontal className={`w-3.5 h-3.5 ${ui.accentText}`} />
                    <span>Dietary Filters:</span>
                  </span>

                  {[
                    { key: 'pureVeg', label: 'Pure Veg' },
                    { key: 'jain', label: 'Jain (No Onion/Garlic)' },
                    { key: 'highProtein', label: 'High-Protein' },
                    { key: 'under30', label: 'Under 30 Mins' },
                    { key: 'favoritesOnly', label: 'Saved Only' }
                  ].map((f) => {
                    const isOn = dietaryFilters[f.key];
                    return (
                      <button
                        type="button"
                        key={f.key}
                        aria-pressed={isOn}
                        onClick={() =>
                          setDietaryFilters((prev) => ({
                            ...prev,
                            [f.key]: !prev[f.key]
                          }))
                        }
                        className={`px-3.5 py-1.5 rounded-full text-xs font-bold border transition-all flex items-center gap-1.5 ${
                          isOn
                            ? ui.primaryBadge
                            : `${ui.cardBg} ${ui.textMuted}`
                        }`}
                      >
                        {isOn && <Check className="w-3 h-3" />}
                        <span>{f.label}</span>
                      </button>
                    );
                  })}
                </div>

                {hasActiveGlobalFilters && (
                  <button
                    onClick={resetAllFilters}
                    className={`text-xs font-bold hover:underline flex items-center gap-1 ${ui.accentText}`}
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Reset Filters</span>
                  </button>
                )}
              </div>
            </>
          )}
        </section>

        {/* ====================================================================
            TAB 1: HOME KITCHENS ("GHAR KA KHANA")
           ==================================================================== */}
        {activeTab === 'home-kitchens' && (
          <div className="space-y-12 py-8 pb-20">
            {/* Flexible Tiffin Subscription Strip */}
            <div
              className={`p-6 sm:p-8 rounded-3xl border flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 ${
                isDark
                  ? 'bg-[#111613] border-[#1E2922]'
                  : 'bg-gradient-to-r from-[#FFF2F3] via-white to-[#FFF6EE] border-[#EAECEF] shadow-sm'
              }`}
            >
              <div className="space-y-2 max-w-2xl">
                <div
                  className={`inline-flex items-center gap-2 text-xs font-bold ${
                    isDark ? 'text-[#22C55E]' : 'text-[#FC8019]'
                  }`}
                >
                  <Calendar className="w-4 h-4" />
                  <span>Flexible Weekly &amp; Monthly Tiffin Subscriptions</span>
                </div>
                <h3 className={`text-xl sm:text-2xl font-extrabold ${ui.textPrimary}`}>
                  Daily Homemade Lunch &amp; Dinner — Pause Any Day With One Tap
                </h3>
                <p className={`text-sm ${ui.textMuted}`}>
                  Current selection:{' '}
                  <strong className={`capitalize ${ui.textPrimary}`}>
                    {tiffinPlan.duration} Plan
                  </strong>{' '}
                  ({tiffinPlan.slot}) •{' '}
                  <span className={`font-bold ${ui.accentText}`}>
                    {tiffinStats.activeMeals} active meals ({tiffinStats.pausedCount} days paused)
                  </span>
                </p>
              </div>

              <div className="flex items-center gap-4 shrink-0">
                <div className="text-right">
                  <div className={`text-xs ${ui.textMuted}`}>Calculated Plan</div>
                  <div className={`text-2xl font-extrabold ${ui.textPrimary}`}>
                    ₹{tiffinStats.totalPrice.toLocaleString()}
                  </div>
                </div>
                <button
                  onClick={() => setShowTiffinModal(true)}
                  className={`px-5 py-3 rounded-full font-bold text-sm transition-all ${ui.primaryBtn}`}
                >
                  Customize Calendar
                </button>
              </div>
            </div>

            {/* Home Chef Cards Grid */}
            <section className="space-y-6">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <h2 className={`text-2xl sm:text-3xl font-extrabold ${ui.textPrimary}`}>
                    Verified Neighborhood Home Kitchens
                  </h2>
                  <p className={`text-sm mt-1 ${ui.textMuted}`}>
                    Click any{' '}
                    <span className="text-[#16A34A] font-bold">
                      Green-Shield Hygiene
                    </span>{' '}
                    badge to inspect FSSAI &amp; 60-sec kitchen video audits.
                  </p>
                </div>
                <span className={`text-xs font-semibold ${ui.textMuted}`}>
                  Showing {filteredChefs.length} active home chefs
                </span>
              </div>

              {filteredChefs.length === 0 ? (
                <div className={`p-12 rounded-3xl border text-center space-y-3 ${ui.cardBg}`}>
                  <p className={`text-lg font-bold ${ui.textPrimary}`}>
                    No home-cooked dishes match your active filters.
                  </p>
                  <button
                    onClick={resetAllFilters}
                    className={`px-5 py-2.5 rounded-full text-xs font-bold ${ui.primaryBtn}`}
                  >
                    Reset All Filters
                  </button>
                </div>
              ) : (
                <div className="grid lg:grid-cols-2 gap-8">
                  {filteredChefs.map((chef) => {
                    const lunchRemaining = Math.max(
                      0,
                      chef.lunchBatch.totalPlates - chef.lunchBatch.bookedPlates
                    );
                    const isSaved = favorites.includes(chef.id);

                    return (
                      <article
                        key={chef.id}
                        className={`rounded-3xl border overflow-hidden flex flex-col justify-between transition-all group ${ui.cardBg} ${ui.cardHover}`}
                      >
                        <div>
                          <div className="relative h-48 w-full overflow-hidden">
                            <FoodImage
                              src={chef.bannerImage}
                              alt={chef.kitchenName}
                              className="w-full h-full"
                              imgClassName="group-hover:scale-105"
                              fallbackLabel={chef.kitchenName}
                              isDark={isDark}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                            <div className="absolute top-3.5 inset-x-3.5 flex items-center justify-between gap-2">
                              {chef.kitchenLive &&
                              chef.lunchBatch.isOpen &&
                              lunchRemaining > 0 ? (
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E23744] text-white text-xs font-bold shadow">
                                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                                  <span>
                                    Only {lunchRemaining} Thalis left • {chef.lunchBatch.label}
                                  </span>
                                </span>
                              ) : (
                                <span className="px-3 py-1 rounded-full bg-black/75 text-white text-xs font-medium">
                                  Lunch Closed • Next Batch 8:00 PM
                                </span>
                              )}

                              <button
                                onClick={() => toggleFavorite(chef.id, chef.kitchenName)}
                                aria-label="Save chef"
                                className="p-2 rounded-full bg-white/90 text-[#1C1C1C] hover:text-[#E23744] shadow"
                              >
                                <Heart
                                  className={`w-4 h-4 ${
                                    isSaved ? 'fill-[#E23744] text-[#E23744]' : ''
                                  }`}
                                />
                              </button>
                            </div>

                            <div className="absolute bottom-3.5 inset-x-4 flex items-end justify-between gap-3">
                              <div className="flex items-center gap-3">
                                <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-white shadow-md shrink-0">
                                  <FoodImage
                                    src={chef.avatar}
                                    alt={chef.name}
                                    className="w-full h-full"
                                    fallbackLabel={chef.name}
                                    isDark={isDark}
                                  />
                                </div>
                                <div>
                                  <h3 className="text-lg font-extrabold text-white leading-tight">
                                    {chef.kitchenName}
                                  </h3>
                                  <p className="text-xs text-white/85">
                                    {chef.name} • {chef.area}
                                  </p>
                                </div>
                              </div>

                              <span className="px-2.5 py-1 rounded-lg bg-[#16A34A] text-white text-xs font-bold shadow shrink-0">
                                {chef.rating} ★
                              </span>
                            </div>
                          </div>

                          <div className="p-5 sm:p-6 space-y-4">
                            <div className="flex flex-wrap items-center gap-2">
                              <button
                                onClick={() => setHygieneModalChef(chef)}
                                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#16A34A]/10 border border-[#16A34A]/30 text-xs font-bold text-[#16A34A] hover:bg-[#16A34A]/20 transition-colors"
                              >
                                <ShieldCheck className="w-3.5 h-3.5" />
                                <span>{chef.hygieneTier}</span>
                              </button>

                              <span
                                className={`px-3 py-1 rounded-full text-xs font-bold border ${ui.secondaryBadge}`}
                              >
                                {chef.specialty}
                              </span>
                            </div>

                            <p className={`text-xs sm:text-sm leading-relaxed ${ui.textMuted}`}>
                              &ldquo;{chef.bio}&rdquo;
                            </p>
                          </div>
                        </div>

                        <div
                          className={`px-5 sm:px-6 pb-6 pt-3 border-t space-y-3 ${
                            isDark ? 'border-[#1E2922]' : 'border-[#EAECEF]'
                          }`}
                        >
                          {chef.filteredDishes.map((dish) => (
                            <div
                              key={dish.id}
                              className={`p-3.5 rounded-2xl border flex items-center justify-between gap-3.5 ${ui.subCardBg}`}
                            >
                              <button type="button" onClick={() => openDishDetail(dish, chef.kitchenName, 'home', chef)} aria-label={`View ${dish.name} details`} className="shrink-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#22C55E]">
                                <FoodImage
                                  src={dish.image}
                                  alt={dish.name}
                                  className="w-20 h-20 rounded-xl"
                                  fallbackLabel={dish.name}
                                  isDark={isDark}
                                />
                              </button>

                              <div className="flex-1 min-w-0 space-y-1">
                                <div className="flex items-center gap-1.5">
                                  <span
                                    className={`w-3.5 h-3.5 rounded-sm border flex items-center justify-center shrink-0 ${
                                      dish.isVeg
                                        ? 'border-[#16A34A]'
                                        : 'border-[#E23744]'
                                    }`}
                                  >
                                    <span
                                      className={`w-1.5 h-1.5 rounded-full ${
                                        dish.isVeg ? 'bg-[#16A34A]' : 'bg-[#E23744]'
                                      }`}
                                    />
                                  </span>
                                  <h4
                                    className={`text-sm font-bold truncate ${ui.textPrimary}`}
                                  >
                                    {dish.name}
                                  </h4>
                                </div>

                                <p className={`text-xs line-clamp-2 ${ui.textMuted}`}>
                                  {dish.description}
                                </p>

                                <div className="flex flex-wrap items-center gap-2.5 text-[11px] pt-0.5">
                                  <span className={`text-sm font-extrabold ${ui.textPrimary}`}>
                                    ₹{dish.price}
                                  </span>
                                  <span className={ui.textMuted}>• {getHomeDishPrepMins(chef, dish)} mins</span>
                                  {dish.isJain && (
                                    <span className="text-[#16A34A] font-bold">
                                      • Jain Safe
                                    </span>
                                  )}
                                </div>
                              </div>

                              <button
                                disabled={!chef.kitchenLive}
                                onClick={() => openCustomizeModal(dish, chef)}
                                className={`shrink-0 px-3.5 py-2 rounded-xl font-bold text-xs transition-all flex items-center gap-1 disabled:opacity-40 ${ui.primaryBtn}`}
                              >
                                <Plus className="w-3.5 h-3.5" />
                                <span>Customize &amp; Add</span>
                              </button>
                            </div>
                          ))}
                        </div>
                      </article>
                    );
                  })}
                </div>
              )}
            </section>

            {/* Community Craving Board */}
            <section className={`p-6 sm:p-8 rounded-3xl border space-y-6 ${ui.cardBg}`}>
              <div>
                <span
                  className={`text-xs font-bold uppercase tracking-[0.16em] ${
                    isDark ? 'text-[#22C55E]' : 'text-[#FC8019]'
                  }`}
                >
                  Neighborhood Demand Engine
                </span>
                <h3 className={`text-2xl font-extrabold mt-1 ${ui.textPrimary}`}>
                  Community Craving Board
                </h3>
                <p className={`text-sm mt-1 ${ui.textMuted}`}>
                  Upvote comfort dishes you miss from home or post a new dish request for local home chefs.
                </p>
              </div>

              <div className="grid lg:grid-cols-12 gap-8">
                <div className="lg:col-span-7 space-y-3.5">
                  {cravings.map((crav) => (
                    <div
                      key={crav.id}
                      className={`p-4 rounded-2xl border flex items-center justify-between gap-4 ${ui.subCardBg}`}
                    >
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h4 className={`text-sm font-bold ${ui.textPrimary}`}>
                            {crav.dish}
                          </h4>
                          {crav.acceptedByChef && (
                            <span className="px-2.5 py-0.5 rounded-full bg-[#16A34A]/15 text-[#16A34A] text-[11px] font-bold">
                              Batch Opened by Chef Meenakshi!
                            </span>
                          )}
                        </div>
                        <p className={`text-xs ${ui.textMuted}`}>{crav.notes}</p>
                        <p className={`text-[11px] ${ui.textMuted}`}>
                          Requested by {crav.requestedBy}
                        </p>
                      </div>

                      <button
                        onClick={() => toggleUpvoteCraving(crav.id)}
                        className={`shrink-0 px-3.5 py-2.5 rounded-xl border text-xs font-bold flex flex-col items-center gap-1 transition-all ${
                          crav.upvoted
                            ? ui.primaryBtn
                            : `${ui.cardBg} ${ui.textPrimary}`
                        }`}
                      >
                        <ThumbsUp className="w-3.5 h-3.5" />
                        <span>{crav.votes}</span>
                      </button>
                    </div>
                  ))}
                </div>

                <form
                  onSubmit={handlePostCraving}
                  className={`lg:col-span-5 p-6 rounded-2xl border space-y-4 ${ui.subCardBg}`}
                >
                  <h4 className={`text-lg font-extrabold ${ui.textPrimary}`}>
                    Request a Homemade Dish
                  </h4>
                  <div>
                    <label className={`block text-xs font-bold mb-1.5 ${ui.textMuted}`}>
                      Dish Name
                    </label>
                    <input
                      type="text"
                      value={newCravingDish}
                      onChange={(e) => setNewCravingDish(e.target.value)}
                      placeholder="e.g., Authentic Gongura Pachadi & Mudda Pappu"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-none ${ui.inputBg}`}
                    />
                  </div>
                  <div>
                    <label className={`block text-xs font-bold mb-1.5 ${ui.textMuted}`}>
                      Preferred Day or Dietary Note
                    </label>
                    <input
                      type="text"
                      value={newCravingNote}
                      onChange={(e) => setNewCravingNote(e.target.value)}
                      placeholder="e.g., Sunday lunch batch, low oil preferred"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-none ${ui.inputBg}`}
                    />
                  </div>
                  <button
                    type="submit"
                    className={`w-full py-3 rounded-xl font-bold text-sm transition-colors ${ui.primaryBtn}`}
                  >
                    Post to Neighborhood Board
                  </button>
                </form>
              </div>
            </section>
          </div>
        )}

        {/* ====================================================================
            TAB 2: RESTAURANTS (FAST FOOD & CURRY DELIVERY)
           ==================================================================== */}
        {activeTab === 'restaurants' && (
          <section className="py-8 pb-20 space-y-8">
            <div>
              <h2 className={`text-2xl sm:text-3xl font-extrabold ${ui.textPrimary}`}>
                Top Delivery Restaurants near {selectedArea}
              </h2>
              <p className={`text-sm mt-1 ${ui.textMuted}`}>
                Express delivery partners with stacked pre-booking and promo offers.
              </p>
            </div>

            {filteredRestaurants.length === 0 ? (
              <div className={`p-12 rounded-3xl border text-center space-y-3 ${ui.cardBg}`}>
                <p className={`text-lg font-bold ${ui.textPrimary}`}>
                  No restaurant dishes match your active filters.
                </p>
                <button
                  onClick={resetAllFilters}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold ${ui.primaryBtn}`}
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-8">
                {filteredRestaurants.map((rest) => {
                  const isSaved = favorites.includes(rest.id);
                  return (
                    <div
                      key={rest.id}
                      className={`rounded-3xl border overflow-hidden flex flex-col justify-between transition-all group ${ui.cardBg} ${ui.cardHover}`}
                    >
                      <div>
                        <div className="relative h-48 w-full overflow-hidden">
                          <FoodImage
                            src={rest.bannerImage}
                            alt={rest.name}
                            className="w-full h-full"
                            imgClassName="group-hover:scale-105"
                            fallbackLabel={rest.name}
                            isDark={isDark}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                          <button
                            onClick={() => toggleFavorite(rest.id, rest.name)}
                            className="absolute top-3.5 right-3.5 p-2 rounded-full bg-white/90 text-[#1C1C1C] hover:text-[#E23744] shadow"
                          >
                            <Heart
                              className={`w-4 h-4 ${
                                isSaved ? 'fill-[#E23744] text-[#E23744]' : ''
                              }`}
                            />
                          </button>

                          <div className="absolute bottom-3.5 inset-x-4 flex items-end justify-between gap-3">
                            <div>
                              <h3 className="text-xl font-extrabold text-white">
                                {rest.name}
                              </h3>
                              <p className="text-xs text-white/85">{rest.cuisines}</p>
                            </div>
                            <span className="px-2.5 py-1 rounded-lg bg-[#16A34A] text-white text-xs font-bold shadow shrink-0">
                              {rest.rating} ★
                            </span>
                          </div>
                        </div>

                        <div className="p-5 sm:p-6 space-y-4">
                          <div className={`flex items-center justify-between text-xs font-semibold ${ui.textMuted}`}>
                            <span>
                              {rest.area} • {rest.distance}
                            </span>
                            <span>
                              {rest.etaMins} mins • {rest.costForTwo}
                            </span>
                          </div>

                          <div className="space-y-2">
                            <div
                              className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center justify-between ${ui.offerPrimaryStrip}`}
                            >
                              <span className="flex items-center gap-1.5">
                                <Percent className="w-3.5 h-3.5" />
                                <span>{rest.offerPrimary}</span>
                              </span>
                            </div>
                            <div
                              className={`px-3.5 py-2 rounded-xl border text-xs font-semibold ${ui.offerSecondaryStrip}`}
                            >
                              {rest.offerSecondary}
                            </div>
                          </div>

                          <div
                            className={`space-y-3 pt-3 border-t ${
                              isDark ? 'border-[#1E2922]' : 'border-[#EAECEF]'
                            }`}
                          >
                            {rest.filteredMenu.map((item) => (
                              <div
                                key={item.id}
                                className={`flex items-center justify-between gap-3 p-3 rounded-2xl border ${ui.subCardBg}`}
                              >
                                <button type="button" onClick={() => openDishDetail(item, rest.name, 'restaurant')} aria-label={`View ${item.name} details`} className="shrink-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#22C55E]">
                                  <FoodImage
                                    src={item.image}
                                    alt={item.name}
                                    className="w-16 h-16 rounded-xl"
                                    fallbackLabel={item.name}
                                    isDark={isDark}
                                  />
                                </button>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-1.5">
                                    <span
                                      className={`w-3.5 h-3.5 rounded-sm border flex items-center justify-center shrink-0 ${
                                        item.isVeg
                                          ? 'border-[#16A34A]'
                                          : 'border-[#E23744]'
                                      }`}
                                    >
                                      <span
                                        className={`w-1.5 h-1.5 rounded-full ${
                                          item.isVeg ? 'bg-[#16A34A]' : 'bg-[#E23744]'
                                        }`}
                                      />
                                    </span>
                                    <span
                                      className={`text-sm font-bold truncate ${ui.textPrimary}`}
                                    >
                                      {item.name}
                                    </span>
                                  </div>
                                  <div className={`text-xs mt-1 ${ui.textMuted}`}>
                                    <strong className={ui.textPrimary}>₹{item.price}</strong> •{' '}
                                    {item.prepMins} mins
                                  </div>
                                </div>

                                <button
                                  onClick={() =>
                                    addDirectToCart(item, rest.name, 'restaurant')
                                  }
                                  className={`px-4 py-2 rounded-xl font-bold text-xs transition-all shrink-0 ${ui.primaryBtn}`}
                                >
                                  + Add
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </section>
        )}

        {/* ====================================================================
            TAB 3: DINEOUT (DEDICATED TABLE RESERVATION EXPERIENCE)
           ==================================================================== */}
        {activeTab === 'dineout' && (
          <section className="py-8 pb-20 space-y-8">
            {/* Dineout Header + Ambience Pills + Sort Dropdown */}
            <div className="space-y-5">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <span
                    className={`text-xs font-bold uppercase tracking-[0.16em] ${
                      isDark ? 'text-[#22C55E]' : 'text-[#FC8019]'
                    }`}
                  >
                    Great Indian Restaurant Festival &amp; Dining Out
                  </span>
                  <h2 className={`text-2xl sm:text-3xl font-extrabold mt-1 ${ui.textPrimary}`}>
                    Dineout Table Reservations &amp; Pre-Booking Offers
                  </h2>
                  <p className={`text-sm mt-1 ${ui.textMuted}`}>
                    Reserve tables at top-rated rooftop lounges, family buffets, and fine dining rooms with up to 50% off.
                  </p>
                </div>

                {/* Sort Dropdown */}
                <div className="flex items-center gap-2">
                  <span className={`text-xs font-bold ${ui.textMuted}`}>Sort By:</span>
                  <select
                    aria-label="Sort Dineout venues"
                    value={dineoutSort}
                    onChange={(e) => setDineoutSort(e.target.value)}
                    className={`px-4 py-2.5 rounded-full border text-xs font-bold focus:outline-none ${ui.inputBg}`}
                  >
                    <option value="rating" className={isDark ? 'bg-[#111613]' : 'bg-white'}>
                      Top Rated
                    </option>
                    <option value="cost" className={isDark ? 'bg-[#111613]' : 'bg-white'}>
                      Cost: Low to High
                    </option>
                    <option value="nearest" className={isDark ? 'bg-[#111613]' : 'bg-white'}>
                      Nearest
                    </option>
                  </select>
                </div>
              </div>

              {/* Ambience Filter Pills */}
              <div className="flex items-center gap-2.5 overflow-x-auto pb-1">
                {[
                  'All Venues',
                  'Rooftop',
                  'Fine Dining',
                  'Family Buffet',
                  'GIRF 50% Off'
                ].map((amb) => {
                  const active = dineoutAmbience === amb;
                  return (
                    <button
                      key={amb}
                      onClick={() => setDineoutAmbience(amb)}
                      className={`px-4 py-2 rounded-full border text-xs font-bold shrink-0 transition-all ${
                        active ? ui.primaryBtn : `${ui.cardBg} ${ui.textPrimary}`
                      }`}
                    >
                      {amb}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Confirmed Table Reservations Banner */}
            {bookings.length > 0 && (
              <div className="p-5 rounded-3xl bg-[#16A34A]/10 border border-[#16A34A]/30 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3 text-sm">
                  <Ticket className="w-5 h-5 text-[#16A34A] shrink-0" />
                  <div>
                    <span className={ui.textMuted}>Latest Table Reservation: </span>
                    <strong className={ui.textPrimary}>{bookings[0].venueName}</strong> •{' '}
                    {bookings[0].guests} Guests • {bookings[0].date} at{' '}
                    <span className="text-[#16A34A] font-bold">
                      {bookings[0].slot} ({bookings[0].zone})
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs px-3 py-1 rounded-full bg-[#16A34A] text-white font-mono font-bold">
                    {bookings[0].code}
                  </span>
                  <button
                    onClick={() => setIsHistoryOpen(true)}
                    className="text-xs font-bold text-[#16A34A] underline"
                  >
                    View All ({bookings.length})
                  </button>
                </div>
              </div>
            )}

            {/* Dineout Venue Cards Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {filteredDineoutVenues.map((venue) => (
                <div
                  key={venue.id}
                  className={`rounded-3xl border overflow-hidden flex flex-col justify-between group transition-all ${ui.cardBg} ${ui.cardHover}`}
                >
                  <div>
                    <div className="relative h-56 w-full overflow-hidden">
                      <FoodImage
                        src={venue.interiorImage}
                        alt={venue.name}
                        className="w-full h-full"
                        imgClassName="group-hover:scale-105"
                        fallbackLabel={venue.name}
                        isDark={isDark}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                      <div className="absolute top-3.5 left-3.5 flex flex-wrap gap-1.5">
                        {venue.ambience.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="absolute bottom-3.5 inset-x-4 flex items-end justify-between gap-3">
                        <div>
                          <h3 className="text-xl font-extrabold text-white">
                            {venue.name}
                          </h3>
                          <p className="text-xs text-white/85">
                            {venue.cuisines}
                          </p>
                        </div>
                        <span className="px-2.5 py-1 rounded-lg bg-[#16A34A] text-white text-xs font-bold shrink-0">
                          {venue.rating} ★
                        </span>
                      </div>
                    </div>

                    <div className="p-5 sm:p-6 space-y-4">
                      <div className={`flex items-center justify-between text-xs font-semibold ${ui.textMuted}`}>
                        <span>
                          {venue.location} • {venue.distanceKm} km away
                        </span>
                        <span className={ui.textPrimary}>
                          ₹{venue.costForTwoNum.toLocaleString()} for two
                        </span>
                      </div>

                      <p className={`text-xs ${ui.textMuted}`}>{venue.tableNote}</p>

                      {/* Stacked Dual-Tier Offer Pills */}
                      <div className="space-y-2">
                        <div
                          className={`px-3.5 py-2.5 rounded-xl text-xs font-bold flex items-center justify-between ${ui.offerPrimaryStrip}`}
                        >
                          <span>% {venue.offerPrimary}</span>
                          <span className="text-[10px] uppercase bg-black/20 px-2 py-0.5 rounded-full">
                            Pre-Book
                          </span>
                        </div>
                        <div
                          className={`px-3.5 py-2 rounded-xl border text-xs font-semibold ${ui.offerSecondaryStrip}`}
                        >
                          {venue.offerSecondary}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`px-5 sm:px-6 pb-6 pt-3 border-t flex items-center justify-between ${
                      isDark ? 'border-[#1E2922]' : 'border-[#EAECEF]'
                    }`}
                  >
                    <span className="text-xs font-bold text-[#16A34A]">
                      Instant Seat Confirmation
                    </span>
                    <button
                      onClick={() => {
                        setBookingVenue(venue);
                        setBookingForm({
                          date: 'Today, Nov 17',
                          slot: '8:30 PM',
                          guests: 2,
                          zone: venue.ambience.includes('Rooftop') ? 'Rooftop' : 'Indoor'
                        });
                      }}
                      className={`px-5 py-2.5 rounded-full font-bold text-xs transition-all ${ui.primaryBtn}`}
                    >
                      Book a Table
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ====================================================================
            TAB 4: FRESH PANTRY (DEDICATED 15-MIN GROCERY & HOMEMADE STAPLES)
           ==================================================================== */}
        {activeTab === 'pantry' && (
          <section className="py-8 pb-20 space-y-8">
            <div className="space-y-5">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <span
                    className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.16em] ${
                      isDark ? 'text-[#22C55E]' : 'text-[#FC8019]'
                    }`}
                  >
                    <Zap className="w-3.5 h-3.5" />
                    <span>15-Minute Express Larder &amp; Farm Staples</span>
                  </span>
                  <h2 className={`text-2xl sm:text-3xl font-extrabold mt-1 ${ui.textPrimary}`}>
                    Fresh Pantry &amp; Homemade Kitchen Staples
                  </h2>
                  <p className={`text-sm mt-1 ${ui.textMuted}`}>
                    Cold-pressed wood-churned oils, stone-ground batters, A2 bilona ghee, and morning-harvested organic produce.
                  </p>
                </div>

                <button
                  onClick={() => setIsCartOpen(true)}
                  className={`px-4 py-2.5 rounded-full text-xs font-bold flex items-center gap-2 ${ui.primaryBadge} border`}
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>View Basket ({totalCartItems} items)</span>
                </button>
              </div>

              {/* Pantry Category Filter Pills */}
              <div className="flex items-center gap-2.5 overflow-x-auto pb-1">
                {[
                  'All Staples',
                  'Fresh Fruits & Veggies',
                  'Homemade Batters & Pickles',
                  'Cold-Pressed Oils & Dairy',
                  'Snacks & Beverages'
                ].map((cat) => {
                  const active = pantryCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setPantryCategory(cat)}
                      className={`px-4 py-2 rounded-full border text-xs font-bold shrink-0 transition-all ${
                        active ? ui.primaryBtn : `${ui.cardBg} ${ui.textPrimary}`
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Distinct Grocery Product Grid with Pack Size, MRP Strikethrough, 15 mins & Inline Qty */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredPantryProducts.map((product) => {
                const qtyInCart = getProductCartQty(product.id);
                const savingsPct = Math.round(
                  ((product.mrp - product.price) / product.mrp) * 100
                );

                return (
                  <div
                    key={product.id}
                    className={`rounded-3xl border overflow-hidden flex flex-col justify-between group transition-all ${ui.cardBg} ${ui.cardHover}`}
                  >
                    <div>
                      <div className="relative h-44 w-full overflow-hidden">
                        <button type="button" onClick={() => openDishDetail(product, product.maker, 'pantry')} aria-label={`View ${product.name} details`} className="block h-full w-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#22C55E]">
                          <FoodImage
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full"
                            imgClassName="group-hover:scale-105"
                            fallbackLabel={product.name}
                            isDark={isDark}
                          />
                        </button>
                        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#16A34A] text-white text-[10px] font-extrabold shadow flex items-center gap-1">
                          <Zap className="w-3 h-3" />
                          <span>{product.eta}</span>
                        </span>
                        <span
                          className={`absolute top-3 right-3 px-2 py-0.5 rounded-md text-[10px] font-extrabold ${
                            isDark
                              ? 'bg-[#090C0A]/90 text-[#22C55E]'
                              : 'bg-white/95 text-[#E23744]'
                          }`}
                        >
                          {savingsPct}% OFF
                        </span>
                      </div>

                      <div className="p-4 space-y-1.5">
                        <div className="flex items-center justify-between gap-2">
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-bold border ${ui.secondaryBadge}`}
                          >
                            Pack: {product.packSize}
                          </span>
                          <span className={`text-[10px] truncate ${ui.textMuted}`}>
                            {product.category}
                          </span>
                        </div>

                        <h3
                          className={`text-sm font-extrabold leading-snug line-clamp-2 pt-1 ${ui.textPrimary}`}
                        >
                          {product.name}
                        </h3>
                        <p className={`text-[11px] ${ui.textMuted}`}>{product.maker}</p>
                      </div>
                    </div>

                    <div
                      className={`px-4 pb-4 pt-3 border-t flex items-center justify-between ${
                        isDark ? 'border-[#1E2922]' : 'border-[#EAECEF]'
                      }`}
                    >
                      <div>
                        <span className={`text-xs line-through mr-1.5 ${ui.textMuted}`}>
                          ₹{product.mrp}
                        </span>
                        <span className={`text-base font-extrabold ${ui.textPrimary}`}>
                          ₹{product.price}
                        </span>
                      </div>

                      {qtyInCart === 0 ? (
                        <button
                          onClick={() =>
                            addDirectToCart(product, product.maker, 'pantry')
                          }
                          className={`px-4 py-2 rounded-xl font-bold text-xs transition-all ${ui.primaryBtn}`}
                        >
                          + Add
                        </button>
                      ) : (
                        <div
                          className={`flex items-center gap-2.5 px-2.5 py-1.5 rounded-xl font-extrabold text-xs ${ui.primaryBtn}`}
                        >
                          <button
                            onClick={() => updateProductQtyDirect(product, -1)}
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span>{qtyInCart}</span>
                          <button
                            onClick={() => updateProductQtyDirect(product, 1)}
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* ====================================================================
            TAB 5: FOOD ON TRAIN (PNR & STATION SEAT DELIVERY)
           ==================================================================== */}
        {activeTab === 'train' && (
          <section className="py-8 pb-20 space-y-8">
            <div className={`p-6 sm:p-8 rounded-3xl border space-y-6 ${ui.cardBg}`}>
              <div>
                <span
                  className={`text-xs font-bold uppercase tracking-[0.16em] ${
                    isDark ? 'text-[#22C55E]' : 'text-[#FC8019]'
                  }`}
                >
                  IRCTC &amp; Station Home-Chef Network
                </span>
                <h2 className={`text-2xl sm:text-3xl font-extrabold mt-1 ${ui.textPrimary}`}>
                  Homemade &amp; Hygienic Meals Delivered to Your Train Seat
                </h2>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                <div>
                  <label className={`block text-xs font-bold mb-1.5 ${ui.textMuted}`}>
                    10-Digit PNR Number
                  </label>
                  <input
                    type="text"
                    maxLength={10}
                    value={pnrNumber}
                    onChange={(e) => setPnrNumber(e.target.value)}
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm font-mono focus:outline-none ${ui.inputBg}`}
                  />
                </div>
                <div>
                  <label className={`block text-xs font-bold mb-1.5 ${ui.textMuted}`}>
                    Select Station
                  </label>
                  <select
                    value={selectedStationCode}
                    onChange={(e) => setSelectedStationCode(e.target.value)}
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none ${ui.inputBg}`}
                  >
                    {TRAIN_STATIONS.map((st) => (
                      <option
                        key={st.code}
                        value={st.code}
                        className={isDark ? 'bg-[#111613]' : 'bg-white'}
                      >
                        {st.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={`block text-xs font-bold mb-1.5 ${ui.textMuted}`}>
                    Coach &amp; Seat Number
                  </label>
                  <input
                    type="text"
                    value={coachSeat}
                    onChange={(e) => setCoachSeat(e.target.value)}
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none ${ui.inputBg}`}
                  />
                </div>
              </div>
            </div>

            {TRAIN_STATIONS.filter((s) => s.code === selectedStationCode).map(
              (station) => (
                <div key={station.code} className="space-y-5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className={`text-xl font-extrabold ${ui.textPrimary}`}>
                      Meals at {station.name} (PNR {pnrNumber} • Seat {coachSeat})
                    </h3>
                    <span className="text-xs font-bold text-[#16A34A]">
                      {station.platformNote}
                    </span>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {station.meals.map((meal) => (
                      <div
                        key={meal.id}
                        className={`p-5 rounded-3xl border flex items-center justify-between gap-4 ${ui.cardBg}`}
                      >
                        <button type="button" onClick={() => openDishDetail(meal, `${station.name} • ${meal.kitchen}`, 'train')} aria-label={`View ${meal.name} details`} className="shrink-0 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#22C55E]">
                          <FoodImage
                            src={meal.image}
                            alt={meal.name}
                            className="w-24 h-24 rounded-2xl"
                            fallbackLabel={meal.name}
                            isDark={isDark}
                          />
                        </button>
                        <div className="flex-1 min-w-0 space-y-1">
                          <span
                            className={`text-[11px] font-bold ${
                              isDark ? 'text-[#22C55E]' : 'text-[#FC8019]'
                            }`}
                          >
                            {meal.kitchen}
                          </span>
                          <h4 className={`text-base font-bold ${ui.textPrimary}`}>
                            {meal.name}
                          </h4>
                          <p className={`text-sm font-extrabold ${ui.textPrimary}`}>
                            ₹{meal.price}
                          </p>
                        </div>
                        <button
                          onClick={() =>
                            addDirectToCart(
                              meal,
                              `${station.code} Train (${coachSeat}) • ${meal.kitchen}`,
                              'train'
                            )
                          }
                          className={`px-4 py-2.5 rounded-xl font-bold text-xs shrink-0 ${ui.primaryBtn}`}
                        >
                          + Add Meal
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )
            )}
          </section>
        )}

        {/* ====================================================================
            TAB 6: HOME CHEF PARTNER DASHBOARD
           ==================================================================== */}
        {activeTab === 'chef-dashboard' && (
          <div className="py-8 space-y-8 pb-24">
            {/* Top Chef Command Bar */}
            <section
              className={`p-6 sm:p-8 rounded-3xl border flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 ${ui.cardBg}`}
            >
              <div className="flex items-start sm:items-center gap-4">
                <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-[#16A34A] shrink-0 shadow">
                  <FoodImage
                    src={primaryChef.avatar}
                    alt={primaryChef.name}
                    className="w-full h-full"
                    fallbackLabel={primaryChef.name}
                    isDark={isDark}
                  />
                </div>
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h1 className={`text-2xl sm:text-3xl font-extrabold ${ui.textPrimary}`}>
                      {primaryChef.name}
                    </h1>
                    <button
                      onClick={() => setHygieneModalChef(primaryChef)}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#16A34A]/15 border border-[#16A34A]/35 text-xs font-bold text-[#16A34A] hover:bg-[#16A34A]/25 transition-colors"
                    >
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Green-Shield Hygiene Certified</span>
                    </button>
                  </div>
                  <p className={`text-xs sm:text-sm ${ui.textMuted}`}>
                    {primaryChef.kitchenName} • FSSAI #{primaryChef.fssaiNumber} •{' '}
                    {primaryChef.area}
                  </p>
                </div>
              </div>

              <div
                className={`flex flex-wrap items-center gap-4 sm:gap-6 w-full lg:w-auto justify-between lg:justify-end pt-4 lg:pt-0 border-t lg:border-t-0 ${
                  isDark ? 'border-[#1E2922]' : 'border-[#EAECEF]'
                }`}
              >
                <div>
                  <div className={`text-xs ${ui.textMuted}`}>Today&apos;s Net Payout</div>
                  <div className="text-2xl font-extrabold text-[#16A34A]">
                    ₹{chefEarnings.toLocaleString()}
                  </div>
                </div>

                <button
                  onClick={() => setHygieneModalChef(primaryChef)}
                  className={`px-4 py-2.5 rounded-xl border text-xs font-bold flex items-center gap-2 ${ui.subCardBg} ${ui.textPrimary}`}
                >
                  <FileCheck2 className={`w-4 h-4 ${ui.accentText}`} />
                  <span>FSSAI &amp; Audit</span>
                </button>

                <button
                  onClick={togglePrimaryChefLive}
                  className={`px-5 py-3 rounded-full font-bold text-xs sm:text-sm flex items-center gap-2.5 transition-all ${
                    primaryChef.kitchenLive
                      ? 'bg-[#16A34A] text-white shadow-md shadow-[#16A34A]/20'
                      : `${ui.subCardBg} ${ui.textMuted}`
                  }`}
                >
                  <span
                    className={`w-2.5 h-2.5 rounded-full ${
                      primaryChef.kitchenLive ? 'bg-white animate-ping' : 'bg-gray-400'
                    }`}
                  />
                  <span>
                    {primaryChef.kitchenLive ? 'Kitchen Live' : 'Kitchen Paused'}
                  </span>
                </button>
              </div>
            </section>

            {/* Sub-Tabs */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => setChefSubTab('batches')}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                  chefSubTab === 'batches'
                    ? ui.primaryBtn
                    : `${ui.cardBg} ${ui.textMuted}`
                }`}
              >
                Live Batches, Prep Sheet &amp; Rider Queue
              </button>
              <button
                onClick={() => setChefSubTab('tiffin-cravings')}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                  chefSubTab === 'tiffin-cravings'
                    ? ui.primaryBtn
                    : `${ui.cardBg} ${ui.textMuted}`
                }`}
              >
                Tiffin Forecast &amp; Craving Board ({cravings.length})
              </button>
            </div>

            {chefSubTab === 'batches' ? (
              <div className="space-y-8">
                {/* Live Batch Capacity Manager */}
                <section className="grid md:grid-cols-2 gap-8">
                  {[
                    { key: 'lunchBatch', data: primaryChef.lunchBatch },
                    { key: 'dinnerBatch', data: primaryChef.dinnerBatch }
                  ].map(({ key, data }) => {
                    const remaining = Math.max(0, data.totalPlates - data.bookedPlates);
                    const pct = Math.min(
                      100,
                      Math.round((data.bookedPlates / Math.max(1, data.totalPlates)) * 100)
                    );

                    return (
                      <div
                        key={key}
                        className={`p-6 sm:p-8 rounded-3xl border space-y-6 ${ui.cardBg}`}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <span
                              className={`text-xs font-bold uppercase tracking-wider ${
                                isDark ? 'text-[#22C55E]' : 'text-[#FC8019]'
                              }`}
                            >
                              Order Cutoff: {data.cutoff}
                            </span>
                            <h2 className={`text-2xl font-extrabold mt-1 ${ui.textPrimary}`}>
                              {data.label}
                            </h2>
                          </div>
                          <span
                            className={`px-3 py-1 rounded-full border text-xs font-mono font-bold ${ui.subCardBg} ${ui.textPrimary}`}
                          >
                            {formatCountdown(batchCountdownsSec[key === 'lunchBatch' ? 'lunch' : 'dinner'])}
                          </span>
                        </div>

                        <div className="space-y-2.5">
                          <div className="flex items-center justify-between text-sm">
                            <span className={ui.textMuted}>
                              Booked:{' '}
                              <strong className={ui.textPrimary}>
                                {data.bookedPlates} / {data.totalPlates} Thalis
                              </strong>
                            </span>
                            <span className={`font-bold ${ui.accentText}`}>
                              {remaining} Plates Left on Customer App
                            </span>
                          </div>
                          <div
                            className={`w-full h-3 rounded-full border overflow-hidden ${ui.subCardBg}`}
                          >
                            <div
                              className={`h-full transition-all duration-300 ${
                                isDark
                                  ? 'bg-[#22C55E]'
                                  : 'bg-gradient-to-r from-[#E23744] to-[#FC8019]'
                              }`}
                              style={{ width: `${pct}%` }}
                            />
                          </div>
                        </div>

                        <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                          <div className="flex items-center gap-3">
                            <span className={`text-xs font-bold ${ui.textMuted}`}>
                              Max Capacity:
                            </span>
                            <button
                              onClick={() => adjustBatchCapacity(key, -1)}
                              className={`w-10 h-10 rounded-xl border flex items-center justify-center ${ui.subCardBg} ${ui.textPrimary}`}
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className={`w-8 text-center font-extrabold text-base ${ui.textPrimary}`}>
                              {data.totalPlates}
                            </span>
                            <button
                              onClick={() => adjustBatchCapacity(key, 1)}
                              className={`w-10 h-10 rounded-xl border flex items-center justify-center ${ui.subCardBg} ${ui.textPrimary}`}
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>

                          <button
                            onClick={() => toggleBatchClosedEarly(key)}
                            className={`px-4 py-2.5 rounded-xl text-xs font-bold border transition-colors ${
                              data.isOpen
                                ? `${ui.subCardBg} ${ui.textPrimary}`
                                : ui.primaryBadge
                            }`}
                          >
                            {data.isOpen ? 'Close Batch Early' : 'Re-open Batch'}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </section>

                {/* Consolidated Kitchen Prep Sheet & Rider Queue */}
                <div className="grid lg:grid-cols-12 gap-8">
                  <section
                    className={`lg:col-span-5 p-6 sm:p-8 rounded-3xl border space-y-6 h-fit ${ui.cardBg}`}
                  >
                    <div>
                      <span
                        className={`text-xs font-bold uppercase tracking-[0.16em] ${
                          isDark ? 'text-[#22C55E]' : 'text-[#FC8019]'
                        }`}
                      >
                        Cook Once, Pack Smart
                      </span>
                      <h3 className={`text-2xl font-extrabold mt-1 ${ui.textPrimary}`}>
                        Consolidated Prep Sheet
                      </h3>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      <div className={`p-3.5 rounded-2xl border ${ui.subCardBg}`}>
                        <div className={`text-xl font-extrabold ${ui.accentText}`}>
                          {consolidatedPrep.lowOilCount + 5}
                        </div>
                        <div className={`text-[11px] mt-0.5 ${ui.textMuted}`}>Low Oil</div>
                      </div>
                      <div className={`p-3.5 rounded-2xl border ${ui.subCardBg}`}>
                        <div className={`text-xl font-extrabold ${ui.textPrimary}`}>
                          {consolidatedPrep.mildSpiceCount + 4}
                        </div>
                        <div className={`text-[11px] mt-0.5 ${ui.textMuted}`}>Mild Spice</div>
                      </div>
                      <div className={`p-3.5 rounded-2xl border ${ui.subCardBg}`}>
                        <div className="text-xl font-extrabold text-[#16A34A]">
                          {consolidatedPrep.extraGheeCount + 3}
                        </div>
                        <div className={`text-[11px] mt-0.5 ${ui.textMuted}`}>Extra Ghee</div>
                      </div>
                    </div>

                    <div className="space-y-3 pt-2">
                      {[
                        {
                          key: 'spices',
                          label: 'Roast & grind fresh Chettinad black pepper masala'
                        },
                        {
                          key: 'lowOilBatch',
                          label: `Portion ${
                            consolidatedPrep.lowOilCount + 5
                          } Low-Oil & Mild-Spice gravies first`
                        },
                        {
                          key: 'phulkas',
                          label: 'Roll 36 whole-wheat phulkas + 6 brown rice bowls'
                        },
                        {
                          key: 'seals',
                          label: 'Apply Green-Shield tamper-evident hygiene seals'
                        }
                      ].map((step) => {
                        const done = prepChecklist[step.key];
                        return (
                          <button
                            key={step.key}
                            onClick={() =>
                              setPrepChecklist((prev) => ({
                                ...prev,
                                [step.key]: !prev[step.key]
                              }))
                            }
                            className={`w-full p-3.5 rounded-2xl border text-left text-xs sm:text-sm flex items-center gap-3 transition-all ${
                              done
                                ? `bg-[#16A34A]/10 border-[#16A34A]/35 line-through ${ui.textMuted}`
                                : `${ui.subCardBg} ${ui.textPrimary}`
                            }`}
                          >
                            <span
                              className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 ${
                                done
                                  ? 'bg-[#16A34A] text-white'
                                  : 'border border-gray-400'
                              }`}
                            >
                              {done && <Check className="w-3.5 h-3.5 stroke-[2.5]" />}
                            </span>
                            <span>{step.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </section>

                  <section className="lg:col-span-7 space-y-5">
                    <h3 className={`text-2xl font-extrabold ${ui.textPrimary}`}>
                      Active Order &amp; Rider Handover Queue ({orders.length})
                    </h3>

                    <div className="space-y-4">
                      {orders.map((ord) => (
                        <div
                          key={ord.id}
                          className={`p-6 rounded-3xl border space-y-4 ${ui.cardBg}`}
                        >
                          <div className="flex flex-wrap items-center justify-between gap-3">
                            <div>
                              <div className="flex items-center gap-2.5">
                                <span className={`font-mono text-sm font-extrabold ${ui.accentText}`}>
                                  {ord.id}
                                </span>
                                <span className={`text-sm font-bold ${ui.textPrimary}`}>
                                  {ord.customerName}
                                </span>
                                <span className={`text-xs ${ui.textMuted}`}>
                                  • {ord.area}
                                </span>
                              </div>
                              <p className={`text-xs mt-0.5 ${ui.textMuted}`}>
                                {ord.batchLabel} • Ordered {ord.createdAt} • ₹{ord.total}
                              </p>
                            </div>

                            <div
                              className={`px-3.5 py-2 rounded-xl border text-right ${ui.subCardBg}`}
                            >
                              <span className={`block text-[10px] uppercase tracking-wider ${ui.textMuted}`}>
                                Rider Pickup OTP
                              </span>
                              <span className={`font-mono text-base font-extrabold ${ui.accentText}`}>
                                {ord.otp}
                              </span>
                            </div>
                          </div>

                          <div
                            className={`space-y-2 pt-2 border-t ${
                              isDark ? 'border-[#1E2922]' : 'border-[#EAECEF]'
                            }`}
                          >
                            {ord.items.map((it, i) => (
                              <div
                                key={i}
                                className="flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm"
                              >
                                <span className={`font-semibold ${ui.textPrimary}`}>
                                  {it.qty} × {it.name}
                                </span>
                                {it.customizations && (
                                  <div className="flex flex-wrap items-center gap-1.5">
                                    <span
                                      className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${ui.primaryBadge}`}
                                    >
                                      {it.customizations.oil}
                                    </span>
                                    <span
                                      className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${ui.secondaryBadge}`}
                                    >
                                      {it.customizations.spice} Spice
                                    </span>
                                    {it.customizations.extraGhee && (
                                      <span className="px-2.5 py-0.5 rounded-full bg-[#16A34A]/15 text-[#16A34A] text-[11px] font-bold">
                                        + Pure A2 Ghee
                                      </span>
                                    )}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>

                          <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                            <span className={`inline-flex items-center gap-2 text-xs font-bold ${ui.accentText}`}>
                              <Clock className="w-3.5 h-3.5" />
                              <span>Stage: {ord.status}</span>
                            </span>

                            {ord.status !== 'Delivered' ? (
                              <button
                                onClick={() => advanceOrderStatus(ord.id)}
                                className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all ${ui.primaryBtn}`}
                              >
                                {ord.status === 'Order Confirmed' && 'Start Cooking'}
                                {ord.status === 'Chef Preparing' && 'Mark Packed & Sealed'}
                                {ord.status === 'Packed & Sealed' && 'Handed to Rider'}
                                {ord.status === 'Out for Delivery' && 'Confirm Delivered'}
                              </button>
                            ) : (
                              <span className="text-xs text-[#16A34A] font-bold flex items-center gap-1">
                                <CheckCircle2 className="w-4 h-4" />
                                Completed
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
              </div>
            ) : (
              <div className="grid lg:grid-cols-12 gap-8">
                <section
                  className={`lg:col-span-6 p-6 sm:p-8 rounded-3xl border space-y-6 ${ui.cardBg}`}
                >
                  <h3 className={`text-2xl font-extrabold ${ui.textPrimary}`}>
                    7-Day Tiffin Subscriber Forecast
                  </h3>
                  <div className="grid grid-cols-7 gap-3 items-end h-52 pt-6 px-2">
                    {[
                      { day: 'Mon', dayNum: 1, base: 14 },
                      { day: 'Tue', dayNum: 2, base: 15 },
                      { day: 'Wed', dayNum: 3, base: 14 },
                      { day: 'Thu', dayNum: 4, base: 16 },
                      { day: 'Fri', dayNum: 5, base: 15 },
                      { day: 'Sat', dayNum: 6, base: 11 },
                      { day: 'Sun', dayNum: 7, base: 10 }
                    ].map((d) => {
                      const isCustomerPaused = tiffinPlan.pausedDays.includes(d.dayNum);
                      const count = isCustomerPaused ? d.base - 1 : d.base;
                      const heightPct = Math.round((count / 18) * 100);
                      return (
                        <div
                          key={d.day}
                          className="flex flex-col items-center gap-2 h-full justify-end"
                        >
                          <span className={`text-xs font-bold ${ui.textPrimary}`}>
                            {count}
                          </span>
                          <div
                            className={`w-full rounded-xl h-36 flex items-end p-1 border ${ui.subCardBg}`}
                          >
                            <div
                              className={`w-full rounded-lg transition-all duration-300 ${
                                isDark
                                  ? 'bg-[#22C55E]'
                                  : 'bg-gradient-to-t from-[#E23744] to-[#FC8019]'
                              }`}
                              style={{ height: `${heightPct}%` }}
                            />
                          </div>
                          <span className={`text-xs ${ui.textMuted}`}>{d.day}</span>
                        </div>
                      );
                    })}
                  </div>
                </section>

                <section
                  className={`lg:col-span-6 p-6 sm:p-8 rounded-3xl border space-y-6 ${ui.cardBg}`}
                >
                  <h3 className={`text-2xl font-extrabold ${ui.textPrimary}`}>
                    Local Craving Requests
                  </h3>
                  <div className="space-y-4">
                    {cravings.map((crav) => (
                      <div
                        key={crav.id}
                        className={`p-5 rounded-2xl border space-y-3 ${ui.subCardBg}`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <h4 className={`text-sm font-bold ${ui.textPrimary}`}>
                              {crav.dish}
                            </h4>
                            <p className={`text-xs mt-1 ${ui.textMuted}`}>{crav.notes}</p>
                          </div>
                          <span
                            className={`px-2.5 py-1 rounded-full text-xs font-bold shrink-0 border ${ui.secondaryBadge}`}
                          >
                            {crav.votes} Neighbors
                          </span>
                        </div>
                        <div className="flex items-center justify-between pt-2">
                          <span className={`text-[11px] ${ui.textMuted}`}>
                            {crav.requestedBy}
                          </span>
                          <button
                            disabled={crav.acceptedByChef}
                            onClick={() => acceptCravingAsSpecialBatch(crav)}
                            className={`px-4 py-2 rounded-xl text-xs font-bold ${
                              crav.acceptedByChef
                                ? 'bg-[#16A34A]/15 text-[#16A34A]'
                                : ui.primaryBtn
                            }`}
                          >
                            {crav.acceptedByChef
                              ? 'Published to Customer Feed ✓'
                              : 'Open Special Batch'}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            )}
          </div>
        )}
      </main>

      {/* ======================================================================
          FOOTER
         ====================================================================== */}
      <footer
        className={`border-t mt-8 ${
          isDark ? 'bg-[#090C0A] border-[#1E2922]' : 'bg-white border-[#EAECEF]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 space-y-10">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex items-start gap-3">
            <div
              className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                isDark
                  ? 'bg-[#22C55E]/15 text-[#22C55E]'
                  : 'bg-gradient-to-br from-[#E23744] to-[#FC8019] text-white'
              }`}
            >
              <Utensils className="w-4 h-4" />
            </div>
            <div>
              <span className={`text-base font-extrabold ${ui.textPrimary}`}>
                Zest &amp; Ghar
              </span>
              <span className={`block text-xs ${ui.textMuted}`}>
                Restaurant favorites and small-batch home cooking, brought together.
              </span>
            </div>
          </div>

          <div>
            <h3 className={`mb-3 text-sm font-extrabold ${ui.textPrimary}`}>Explore</h3>
            <div className="flex flex-col items-start gap-2">
              {[
                ['Restaurants', 'restaurants'],
                ['Home Kitchens', 'home-kitchens'],
                ['Dineout', 'dineout'],
                ['Fresh Pantry', 'pantry'],
                ['Food on Train', 'train']
              ].map(([label, tab]) => (
                <button key={tab} type="button" onClick={() => {
                  setActiveTab(tab);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }} className={`text-left text-xs hover:underline ${ui.textMuted}`}>
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className={`mb-3 text-sm font-extrabold ${ui.textPrimary}`}>For our community</h3>
            <div className="flex flex-col items-start gap-2">
              <button type="button" onClick={() => handleSelectNavTab('chef-dashboard')} className={`text-xs hover:underline ${ui.textMuted}`}>Home Chef Partner Dashboard</button>
              <button type="button" onClick={() => setIsHistoryOpen(true)} className={`text-xs hover:underline ${ui.textMuted}`}>Orders &amp; table bookings</button>
              <span className={`text-xs ${ui.textMuted}`}>FSSAI &amp; video-audited home kitchens</span>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className={`text-sm font-extrabold ${ui.textPrimary}`}>Available cities</h3>
            <select
              aria-label="Select city footprint"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className={`w-full max-w-full px-3.5 py-2 rounded-xl border text-xs font-bold focus:outline-none ${ui.inputBg}`}
            >
              {CITIES_LIST.map((city) => (
                <option
                  key={city}
                  value={city}
                  className={isDark ? 'bg-[#111613]' : 'bg-white'}
                >
                  {city}
                </option>
              ))}
            </select>
            <p className={`text-xs ${ui.textMuted}`}>Serving 685+ cities across India</p>
          </div>
          </div>
          <div className={`border-t pt-5 text-xs ${isDark ? 'border-[#1E2922]' : 'border-[#EAECEF]'} ${ui.textMuted}`}>
            © {new Date().getFullYear()} Zest &amp; Ghar. Good food, made with care.
          </div>
        </div>
      </footer>

      {/* ======================================================================
          MOBILE BOTTOM NAVIGATION DOCK (INCLUDES WORKING CART TRIGGER)
         ====================================================================== */}
      <nav
        className={`md:hidden fixed bottom-0 inset-x-0 z-40 backdrop-blur-xl border-t px-1.5 py-2 ${
          isDark
            ? 'bg-[#090C0A]/95 border-[#1E2922]'
            : 'bg-white/95 border-[#EAECEF]'
        }`}
      >
        <div className="grid grid-cols-6 gap-1 text-center">
          {[
            {
              id: 'restaurants',
              label: 'Delivery',
              icon: Utensils,
              action: () => handleSelectNavTab('restaurants'),
              isActive: activeTab === 'restaurants'
            },
            {
              id: 'home-kitchens',
              label: 'Home Chefs',
              icon: ChefHat,
              action: () => handleSelectNavTab('home-kitchens'),
              isActive: activeTab === 'home-kitchens'
            },
            {
              id: 'dineout',
              label: 'Dineout',
              icon: Sparkles,
              action: () => handleSelectNavTab('dineout'),
              isActive: activeTab === 'dineout'
            },
            {
              id: 'pantry',
              label: 'Pantry',
              icon: Store,
              action: () => handleSelectNavTab('pantry'),
              isActive: activeTab === 'pantry'
            },
            {
              id: 'train',
              label: 'Train',
              icon: Train,
              action: () => handleSelectNavTab('train'),
              isActive: activeTab === 'train'
            },
            {
              id: 'mobile-cart',
              label: `Cart (${totalCartItems})`,
              icon: ShoppingBag,
              action: () => setIsCartOpen(true),
              isActive: isCartOpen
            }
          ].map((navItem) => {
            const Icon = navItem.icon;
            return (
              <button
                key={navItem.id}
                type="button"
                onClick={navItem.action}
                className={`flex flex-col items-center justify-center py-1.5 rounded-xl transition-colors ${
                  navItem.isActive ? ui.accentText : ui.textMuted
                }`}
              >
                <Icon className="w-4 h-4 mb-1" />
                <span className="text-[10px] font-bold leading-none">
                  {navItem.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* ======================================================================
          MODAL A: MANDATORY SIGN IN & REGISTRATION GATE MODAL
         ====================================================================== */}
      {authModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div
            className={`w-full max-w-md rounded-3xl border p-6 sm:p-8 space-y-6 shadow-2xl max-h-[92vh] overflow-y-auto ${ui.cardBg}`}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span
                  className={`text-xs font-bold uppercase tracking-wider ${
                    isDark ? 'text-[#22C55E]' : 'text-[#FC8019]'
                  }`}
                >
                  Zest &amp; Ghar Member Access
                </span>
                <h3 className={`text-2xl font-extrabold mt-1 ${ui.textPrimary}`}>
                  {authTab === 'signin' ? 'Sign In to Continue' : 'Create Your Account'}
                </h3>
              </div>
              <button
                onClick={() => setAuthModalOpen(false)}
                className={`p-2 rounded-full ${ui.subCardBg} ${ui.textMuted}`}
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {authPromptReason && (
              <div
                className={`p-3.5 rounded-2xl border flex items-start gap-2.5 text-xs font-semibold ${ui.primaryBadge}`}
              >
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{authPromptReason}</span>
              </div>
            )}

            {/* Sign In / Create Account Tabs */}
            <div className={`grid grid-cols-2 p-1 rounded-2xl border ${ui.subCardBg}`}>
              <button
                type="button"
                onClick={() => {
                  setAuthTab('signin');
                  setAuthError('');
                }}
                className={`py-2.5 rounded-xl text-xs font-extrabold transition-all ${
                  authTab === 'signin' ? ui.primaryBtn : ui.textMuted
                }`}
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => {
                  setAuthTab('register');
                  setAuthError('');
                }}
                className={`py-2.5 rounded-xl text-xs font-extrabold transition-all ${
                  authTab === 'register' ? ui.primaryBtn : ui.textMuted
                }`}
              >
                Create Account
              </button>
            </div>

            {authError && (
              <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-xs font-semibold text-red-500">
                {authError}
              </div>
            )}

            <form onSubmit={handleAuthSubmit} className="space-y-4">
              {authTab === 'register' && (
                <>
                  <div>
                    <label className={`block text-xs font-bold mb-1.5 ${ui.textMuted}`}>
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={authForm.name}
                      onChange={(e) =>
                        setAuthForm((p) => ({ ...p, name: e.target.value }))
                      }
                      placeholder="e.g., Rohan Sharma"
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none ${ui.inputBg}`}
                    />
                  </div>

                  <div>
                    <label className={`block text-xs font-bold mb-1.5 ${ui.textMuted}`}>
                      Account Role
                    </label>
                    <div className="grid grid-cols-2 gap-2.5">
                      {[
                        { id: 'customer', label: 'Food Lover / Customer' },
                        { id: 'chef', label: 'Home Chef Partner' }
                      ].map((r) => (
                        <button
                          key={r.id}
                          type="button"
                          onClick={() =>
                            setAuthForm((p) => ({ ...p, role: r.id }))
                          }
                          className={`py-2.5 px-3 rounded-xl border text-xs font-bold transition-all ${
                            authForm.role === r.id
                              ? ui.primaryBadge
                              : `${ui.subCardBg} ${ui.textMuted}`
                          }`}
                        >
                          {r.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}

              <div>
                <label className={`block text-xs font-bold mb-1.5 ${ui.textMuted}`}>
                  Email or Mobile Number
                </label>
                <input
                  type="text"
                  value={authForm.contact}
                  onChange={(e) =>
                    setAuthForm((p) => ({ ...p, contact: e.target.value }))
                  }
                  placeholder="arjun@zestghar.in or 9840012345"
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none ${ui.inputBg}`}
                />
              </div>

              <div>
                <label className={`block text-xs font-bold mb-1.5 ${ui.textMuted}`}>
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={authForm.password}
                    onChange={(e) =>
                      setAuthForm((p) => ({ ...p, password: e.target.value }))
                    }
                    placeholder="••••••••"
                    className={`w-full px-4 py-2.5 pr-10 rounded-xl border text-sm focus:outline-none ${ui.inputBg}`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className={`absolute right-3 top-1/2 -translate-y-1/2 ${ui.textMuted}`}
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className={`w-full py-3.5 rounded-2xl font-bold text-sm transition-all ${ui.primaryBtn}`}
              >
                {authTab === 'signin' ? 'Sign In' : 'Create Account & Continue'}
              </button>
            </form>

            {/* 1-Click Instant Demo Login Buttons */}
            <div
              className={`pt-4 border-t space-y-2.5 ${
                isDark ? 'border-[#1E2922]' : 'border-[#EAECEF]'
              }`}
            >
              <p className={`text-[11px] font-bold uppercase tracking-wider text-center ${ui.textMuted}`}>
                Instant 1-Click Demo Access
              </p>
              <div className="grid grid-cols-2 gap-2.5">
                <button
                  type="button"
                  onClick={() => loginWithDemo('customer')}
                  className={`py-2.5 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${ui.subCardBg} ${ui.textPrimary} ${ui.cardHover}`}
                >
                  <User className={`w-3.5 h-3.5 ${ui.accentText}`} />
                  <span>Demo Customer</span>
                </button>
                <button
                  type="button"
                  onClick={() => loginWithDemo('chef')}
                  className={`py-2.5 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${ui.subCardBg} ${ui.textPrimary} ${ui.cardHover}`}
                >
                  <ChefHat className="w-3.5 h-3.5 text-[#16A34A]" />
                  <span>Demo Home Chef</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================================
          MODAL B: DINEOUT TABLE RESERVATION MODAL
         ====================================================================== */}
      {bookingVenue && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div
            className={`w-full max-w-lg rounded-3xl border p-6 sm:p-8 space-y-6 shadow-2xl max-h-[92vh] overflow-y-auto ${ui.cardBg}`}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span
                  className={`text-xs font-bold uppercase tracking-wider ${
                    isDark ? 'text-[#22C55E]' : 'text-[#FC8019]'
                  }`}
                >
                  Dineout Table Reservation
                </span>
                <h3 className={`text-2xl font-extrabold mt-1 ${ui.textPrimary}`}>
                  {bookingVenue.name}
                </h3>
                <p className={`text-xs mt-0.5 ${ui.textMuted}`}>
                  {bookingVenue.location} • {bookingVenue.offerPrimary}
                </p>
              </div>
              <button
                onClick={() => setBookingVenue(null)}
                className={`p-2 rounded-full ${ui.subCardBg} ${ui.textMuted}`}
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4">
              {/* Date */}
              <div>
                <label className={`block text-xs font-bold mb-2 ${ui.textMuted}`}>
                  Select Date
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    'Today, Nov 17',
                    'Tomorrow, Nov 18',
                    'Fri, Nov 20',
                    'Sat, Nov 21'
                  ].map((d) => (
                    <button
                      key={d}
                      type="button"
                      onClick={() => setBookingForm((p) => ({ ...p, date: d }))}
                      className={`py-2 px-2 rounded-xl border text-xs font-bold ${
                        bookingForm.date === d
                          ? ui.primaryBtn
                          : `${ui.subCardBg} ${ui.textPrimary}`
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Slot */}
              <div>
                <label className={`block text-xs font-bold mb-2 ${ui.textMuted}`}>
                  Select Time Slot
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                  {['1:00 PM', '2:00 PM', '7:30 PM', '8:30 PM', '9:30 PM'].map(
                    (slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setBookingForm((p) => ({ ...p, slot }))}
                        className={`py-2 rounded-xl border text-xs font-bold ${
                          bookingForm.slot === slot
                            ? ui.primaryBtn
                            : `${ui.subCardBg} ${ui.textPrimary}`
                        }`}
                      >
                        {slot}
                      </button>
                    )
                  )}
                </div>
              </div>

              {/* Guest Count (1-8) */}
              <div>
                <label className={`block text-xs font-bold mb-2 ${ui.textMuted}`}>
                  Guest Count (1–8 Guests)
                </label>
                <div className="grid grid-cols-8 gap-1.5">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((g) => (
                    <button
                      key={g}
                      type="button"
                      onClick={() => setBookingForm((p) => ({ ...p, guests: g }))}
                      className={`py-2 rounded-xl border text-xs font-extrabold ${
                        bookingForm.guests === g
                          ? ui.primaryBtn
                          : `${ui.subCardBg} ${ui.textPrimary}`
                      }`}
                    >
                      {g}
                    </button>
                  ))}
                </div>
              </div>

              {/* Seating Zone */}
              <div>
                <label className={`block text-xs font-bold mb-2 ${ui.textMuted}`}>
                  Preferred Seating Zone
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {['Indoor', 'Rooftop', 'Private Booth'].map((z) => (
                    <button
                      key={z}
                      type="button"
                      onClick={() => setBookingForm((p) => ({ ...p, zone: z }))}
                      className={`py-2.5 rounded-xl border text-xs font-bold ${
                        bookingForm.zone === z
                          ? ui.primaryBadge
                          : `${ui.subCardBg} ${ui.textMuted}`
                      }`}
                    >
                      {z}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={handleConfirmTableReservation}
              className={`w-full py-3.5 rounded-2xl font-bold text-sm ${ui.primaryBtn}`}
            >
              Confirm Reservation ({bookingForm.guests} Guests • {bookingForm.slot})
            </button>
          </div>
        </div>
      )}

      {/* ======================================================================
          MODAL C: "COOK IT MY WAY" HOME DISH CUSTOMIZATION MODAL
         ====================================================================== */}
      {customizingDish && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div
            className={`w-full max-w-lg rounded-3xl border p-6 sm:p-8 space-y-6 shadow-2xl max-h-[90vh] overflow-y-auto ${ui.cardBg}`}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <FoodImage
                  src={customizingDish.dish.image}
                  alt={customizingDish.dish.name}
                  className="w-16 h-16 rounded-2xl shrink-0"
                  fallbackLabel={customizingDish.dish.name}
                  isDark={isDark}
                />
                <div>
                  <span
                    className={`text-xs font-bold uppercase tracking-wider ${
                      isDark ? 'text-[#22C55E]' : 'text-[#FC8019]'
                    }`}
                  >
                    Cook It My Way • {customizingDish.chef.kitchenName}
                  </span>
                  <h3 className={`text-xl font-extrabold mt-0.5 ${ui.textPrimary}`}>
                    {customizingDish.dish.name}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setCustomizingDish(null)}
                className={`p-2 rounded-full ${ui.subCardBg} ${ui.textMuted}`}
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-2.5">
              <label className={`text-xs font-bold flex items-center gap-1.5 ${ui.textMuted}`}>
                <Droplets className={`w-3.5 h-3.5 ${ui.accentText}`} />
                <span>Oil Preference</span>
              </label>
              <div className="grid grid-cols-2 gap-3">
                {['Low Oil', 'Regular'].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setCustomOptions((p) => ({ ...p, oil: opt }))}
                    className={`py-2.5 rounded-xl border text-xs font-bold transition-all ${
                      customOptions.oil === opt
                        ? ui.primaryBtn
                        : `${ui.subCardBg} ${ui.textPrimary}`
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2.5">
              <label className={`text-xs font-bold flex items-center gap-1.5 ${ui.textMuted}`}>
                <Flame className={`w-3.5 h-3.5 ${ui.accentText}`} />
                <span>Spice Level</span>
              </label>
              <div className="grid grid-cols-3 gap-3">
                {['Mild', 'Medium', 'Spicy'].map((sp) => (
                  <button
                    key={sp}
                    onClick={() => setCustomOptions((p) => ({ ...p, spice: sp }))}
                    className={`py-2.5 rounded-xl border text-xs font-bold transition-all ${
                      customOptions.spice === sp
                        ? ui.primaryBtn
                        : `${ui.subCardBg} ${ui.textPrimary}`
                    }`}
                  >
                    {sp}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2.5">
              <label className={`text-xs font-bold ${ui.textMuted}`}>
                Grain / Accompaniment Swap
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {['3 Phulkas', 'Brown Rice', 'Jeera Rice'].map((gr) => (
                  <button
                    key={gr}
                    onClick={() => setCustomOptions((p) => ({ ...p, grain: gr }))}
                    className={`py-2.5 px-2 rounded-xl border text-xs font-bold transition-all ${
                      customOptions.grain === gr
                        ? ui.primaryBadge
                        : `${ui.subCardBg} ${ui.textMuted}`
                    }`}
                  >
                    {gr}
                  </button>
                ))}
              </div>
            </div>

            <div
              className={`p-4 rounded-2xl border flex items-center justify-between ${ui.subCardBg}`}
            >
              <div>
                <div className={`text-sm font-bold ${ui.textPrimary}`}>
                  Add Pure A2 Desi Ghee
                </div>
                <div className={`text-xs ${ui.textMuted}`}>
                  Warm cultured cow ghee drizzled before sealing (+₹20)
                </div>
              </div>
              <button
                onClick={() =>
                  setCustomOptions((p) => ({ ...p, extraGhee: !p.extraGhee }))
                }
                className={`w-12 h-7 rounded-full p-1 transition-colors ${
                  customOptions.extraGhee
                    ? 'bg-[#16A34A]'
                    : isDark
                    ? 'bg-[#1E2922]'
                    : 'bg-gray-300'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full bg-white transition-transform ${
                    customOptions.extraGhee ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

            <button
              onClick={confirmAddHomemadeDish}
              className={`w-full py-3.5 rounded-2xl font-bold text-sm transition-colors ${ui.primaryBtn}`}
            >
              Add Customized Dish • ₹
              {customizingDish.dish.price + (customOptions.extraGhee ? 20 : 0)}
            </button>
          </div>
        </div>
      )}

      {/* ======================================================================
          MODAL D: FLEXIBLE TIFFIN CALENDAR BUILDER
         ====================================================================== */}
      {showTiffinModal && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div
            className={`w-full max-w-xl rounded-3xl border p-6 sm:p-8 space-y-6 shadow-2xl max-h-[90vh] overflow-y-auto ${ui.cardBg}`}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span
                  className={`text-xs font-bold uppercase tracking-wider ${
                    isDark ? 'text-[#22C55E]' : 'text-[#FC8019]'
                  }`}
                >
                  Flexible Tiffin Subscription
                </span>
                <h3 className={`text-2xl font-extrabold mt-1 ${ui.textPrimary}`}>
                  Customize Your Homemade Tiffin Calendar
                </h3>
              </div>
              <button
                onClick={() => setShowTiffinModal(false)}
                className={`p-2 rounded-full ${ui.subCardBg} ${ui.textMuted}`}
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <span className={`text-xs font-bold ${ui.textMuted}`}>Plan Cycle</span>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'weekly', label: 'Weekly (7d)' },
                    { id: 'monthly', label: 'Monthly (28d)' }
                  ].map((d) => (
                    <button
                      key={d.id}
                      onClick={() =>
                        setTiffinPlan((p) => ({ ...p, duration: d.id }))
                      }
                      className={`py-2 rounded-xl border text-xs font-bold ${
                        tiffinPlan.duration === d.id
                          ? ui.primaryBtn
                          : `${ui.subCardBg} ${ui.textPrimary}`
                      }`}
                    >
                      {d.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <span className={`text-xs font-bold ${ui.textMuted}`}>Meal Slot</span>
                <div className="grid grid-cols-3 gap-2">
                  {['Lunch', 'Dinner', 'Both'].map((s) => (
                    <button
                      key={s}
                      onClick={() => setTiffinPlan((p) => ({ ...p, slot: s }))}
                      className={`py-2 rounded-xl border text-xs font-bold ${
                        tiffinPlan.slot === s
                          ? ui.primaryBtn
                          : `${ui.subCardBg} ${ui.textPrimary}`
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className={ui.textMuted}>
                  Tap any day to <strong className={ui.textPrimary}>Pause / Skip</strong>:
                </span>
                <span className={`font-bold ${ui.accentText}`}>
                  {tiffinStats.pausedCount} days paused
                </span>
              </div>

              <div className="grid grid-cols-7 gap-2">
                {Array.from({ length: tiffinStats.totalDays }, (_, i) => i + 1).map(
                  (day) => {
                    const isPaused = tiffinPlan.pausedDays.includes(day);
                    return (
                      <button
                        key={day}
                        onClick={() => toggleTiffinDay(day)}
                        className={`py-2.5 rounded-xl border text-xs font-bold flex flex-col items-center gap-0.5 transition-all ${
                          isPaused
                            ? `${ui.subCardBg} ${ui.textMuted} line-through`
                            : 'bg-[#16A34A]/12 border-[#16A34A]/40 text-[#16A34A]'
                        }`}
                      >
                        <span>D{day}</span>
                        <span className="text-[9px] uppercase">
                          {isPaused ? 'Skip' : 'Active'}
                        </span>
                      </button>
                    );
                  }
                )}
              </div>
            </div>

            <div
              className={`p-4 rounded-2xl border flex items-center justify-between ${ui.subCardBg}`}
            >
              <div>
                <div className={`text-xs ${ui.textMuted}`}>
                  {tiffinStats.activeMeals} Meals × ₹{tiffinStats.ratePerMeal}
                </div>
                <div className={`text-2xl font-extrabold ${ui.textPrimary}`}>
                  ₹{tiffinStats.totalPrice.toLocaleString()}
                </div>
              </div>
              <button
                onClick={() => {
                  addDirectToCart(
                    {
                      id: `tiffin-${tiffinPlan.duration}-${tiffinPlan.slot}`,
                      image: HERO_IMAGES.homeThali,
                      name: `${
                        tiffinPlan.duration === 'weekly' ? 'Weekly' : 'Monthly'
                      } Home Tiffin (${tiffinPlan.slot} • ${
                        tiffinStats.activeMeals
                      } Meals)`,
                      price: tiffinStats.totalPrice
                    },
                    'Zest & Ghar Tiffin Collective',
                    'home'
                  );
                  setShowTiffinModal(false);
                }}
                className={`px-5 py-3 rounded-xl font-bold text-xs sm:text-sm ${ui.primaryBtn}`}
              >
                Add Plan to Cart
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================================
          MODAL E: FSSAI & GREEN-SHIELD KITCHEN HYGIENE AUDIT MODAL
         ====================================================================== */}
      {hygieneModalChef && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div
            className={`w-full max-w-2xl rounded-3xl border p-6 sm:p-8 space-y-6 shadow-2xl max-h-[90vh] overflow-y-auto ${ui.cardBg}`}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <FoodImage
                  src={hygieneModalChef.avatar}
                  alt={hygieneModalChef.name}
                  className="w-16 h-16 rounded-2xl shrink-0"
                  fallbackLabel={hygieneModalChef.name}
                  isDark={isDark}
                />
                <div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#16A34A]">
                    <ShieldCheck className="w-4 h-4" />
                    <span>{hygieneModalChef.hygieneTier}</span>
                  </span>
                  <h3 className={`text-xl sm:text-2xl font-extrabold mt-0.5 ${ui.textPrimary}`}>
                    {hygieneModalChef.kitchenName} — Hygiene Dossier
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setHygieneModalChef(null)}
                className={`p-2 rounded-full ${ui.subCardBg} ${ui.textMuted}`}
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-4 rounded-2xl bg-[#16A34A]/10 border border-[#16A34A]/30 flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className={`text-xs ${ui.textMuted}`}>
                  Government FSSAI Registration
                </div>
                <div className="font-mono text-base font-extrabold text-[#16A34A] mt-0.5">
                  #{hygieneModalChef.fssaiNumber}
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-[#16A34A] text-white text-xs font-bold">
                Active &amp; Verified
              </span>
            </div>

            <div className="space-y-3">
              <div className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider ${ui.textMuted}`}>
                <Video className="w-4 h-4 text-[#16A34A]" />
                <span>60-Second Live-Video Kitchen Inspection Passed</span>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  'Dedicated stainless-steel & granite prep counter',
                  'RO + UV purified water used for cooking & washing',
                  'Airtight glass/steel spice storage (zero reused plastic)',
                  'Strict Veg & Non-Veg utensil separation + hairnet protocol'
                ].map((checkItem, idx) => (
                  <div
                    key={idx}
                    className={`p-3.5 rounded-2xl border flex items-start gap-2.5 text-xs ${ui.subCardBg} ${ui.textPrimary}`}
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                    <span>{checkItem}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================================
          MODAL F: LIVE ORDER PROGRESS STEPPER
         ====================================================================== */}
      {activeOrderTracker && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div
            className={`w-full max-w-lg rounded-3xl border p-6 sm:p-8 space-y-6 shadow-2xl ${ui.cardBg}`}
          >
            <div className="flex items-start justify-between">
              <div>
                <span className={`text-xs font-mono font-bold ${ui.accentText}`}>
                  ORDER {activeOrderTracker.id}
                </span>
                <h3 className={`text-2xl font-extrabold mt-1 ${ui.textPrimary}`}>
                  Live Kitchen &amp; Rider Progress
                </h3>
              </div>
              <button
                onClick={() => setActiveOrderTracker(null)}
                className={`p-2 rounded-full ${ui.subCardBg} ${ui.textMuted}`}
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4">
              {[
                {
                  stage: 'Order Confirmed',
                  desc: 'Batch slot locked & custom wellness notes sent to kitchen'
                },
                {
                  stage: 'Chef Preparing',
                  desc: 'Freshly cooked in small batch with cold-pressed oils'
                },
                {
                  stage: 'Packed & Sealed',
                  desc: 'Green-Shield tamper-evident hygiene seal applied'
                },
                {
                  stage: 'Out for Delivery',
                  desc: 'Rider Karthik K. en route • Insulated thermal bag'
                },
                {
                  stage: 'Delivered',
                  desc: 'Enjoy your meal!'
                }
              ].map((step, idx) => {
                const stages = [
                  'Order Confirmed',
                  'Chef Preparing',
                  'Packed & Sealed',
                  'Out for Delivery',
                  'Delivered'
                ];
                const currentIdx = stages.indexOf(activeOrderTracker.status);
                const isDone = idx <= currentIdx;
                return (
                  <div key={step.stage} className="flex items-start gap-3.5">
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${
                        isDone
                          ? isDark
                            ? 'bg-[#22C55E] text-[#090C0A]'
                            : 'bg-[#E23744] text-white'
                          : `${ui.subCardBg} border ${ui.textMuted}`
                      }`}
                    >
                      {isDone ? <Check className="w-3.5 h-3.5" /> : idx + 1}
                    </div>
                    <div>
                      <div
                        className={`text-sm font-bold ${
                          isDone ? ui.textPrimary : ui.textMuted
                        }`}
                      >
                        {step.stage}
                      </div>
                      <div className={`text-xs ${ui.textMuted}`}>{step.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div
              className={`p-4 rounded-2xl border flex items-center justify-between text-xs ${ui.subCardBg}`}
            >
              <span className={ui.textMuted}>
                Safe Handover OTP:{' '}
                <strong className={`font-mono text-sm ${ui.accentText}`}>
                  {activeOrderTracker.otp}
                </strong>
              </span>
              {activeOrderTracker.status !== 'Delivered' && (
                <button
                  onClick={() => advanceOrderStatus(activeOrderTracker.id)}
                  className={`px-3.5 py-1.5 rounded-lg font-bold transition-colors ${ui.primaryBtn}`}
                >
                  Simulate Next Stage
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {selectedDishDetail && (
        <div className="fixed inset-0 z-[70] bg-black/75 backdrop-blur-sm flex items-center justify-center p-4" onClick={(event) => {
          if (event.target === event.currentTarget) setSelectedDishDetail(null);
        }}>
          <article className={`w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-3xl border shadow-2xl ${ui.cardBg}`}>
            <div className="relative h-56 sm:h-72">
              <FoodImage src={selectedDishDetail.item.image} alt={selectedDishDetail.item.name} className="w-full h-full" fallbackLabel={selectedDishDetail.item.name} isDark={isDark} />
              <button type="button" onClick={() => setSelectedDishDetail(null)} aria-label="Close dish details" className="absolute right-4 top-4 rounded-full bg-black/70 p-2 text-white"><X className="h-5 w-5" /></button>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-5 pt-16 text-white">
                <span className="text-xs font-bold uppercase tracking-wider text-white/80">{selectedDishDetail.sourceName}</span>
                <h2 className="mt-1 text-2xl font-extrabold sm:text-3xl">{selectedDishDetail.item.name}</h2>
              </div>
            </div>
            <div className="grid gap-6 p-5 sm:grid-cols-[1.2fr_0.8fr] sm:p-7">
              <div className="space-y-5">
                <section>
                  <h3 className={`text-lg font-extrabold ${ui.textPrimary}`}>About this dish</h3>
                  <p className={`mt-1 text-sm leading-relaxed ${ui.textMuted}`}>{selectedDishDetail.item.description || `${selectedDishDetail.item.category || 'Fresh pantry'} item from ${selectedDishDetail.sourceName}.`}</p>
                </section>
                <section>
                  <h3 className={`text-lg font-extrabold ${ui.textPrimary}`}>Ingredients</h3>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {(selectedDishDetail.item.ingredients || FOOD_RECIPE_DETAILS[selectedDishDetail.item.id]?.ingredients || [selectedDishDetail.item.name]).map((ingredient) => (
                      <li key={ingredient} className={`rounded-full border px-3 py-1 text-xs font-semibold ${ui.primaryBadge}`}>{ingredient}</li>
                    ))}
                  </ul>
                  {selectedDishDetail.sourceType === 'pantry' && <p className={`mt-2 text-xs ${ui.textMuted}`}>For packaged pantry goods, check the maker&apos;s label for the complete ingredient and allergen declaration.</p>}
                  {selectedDishDetail.sourceType !== 'pantry' && <p className={`mt-2 text-xs ${ui.textMuted}`}>This is the sample recipe information for the demo menu. Confirm exact ingredients and allergens with the restaurant or chef before ordering.</p>}
                </section>
                <section>
                  <h3 className={`text-lg font-extrabold ${ui.textPrimary}`}>How it&apos;s made</h3>
                  <ol className={`mt-2 list-inside list-decimal space-y-2 text-sm ${ui.textMuted}`}>
                    {(selectedDishDetail.item.method || FOOD_RECIPE_DETAILS[selectedDishDetail.item.id]?.method || ['Prepared and packed by the listed maker. Follow the product label for storage and serving guidance.']).map((step) => <li key={step}>{step}</li>)}
                  </ol>
                  {selectedDishDetail.chef && <p className={`mt-3 text-xs ${ui.textMuted}`}>Recipe details are a menu preview; the home chef can confirm daily substitutions and allergens.</p>}
                </section>
              </div>
              <aside className={`h-fit space-y-4 rounded-2xl border p-4 ${ui.subCardBg}`}>
                <div className="flex items-center justify-between gap-3">
                  <span className={`text-sm font-semibold ${ui.textMuted}`}>Price</span>
                  <span className={`text-xl font-extrabold ${ui.textPrimary}`}>₹{selectedDishDetail.item.price}</span>
                </div>
                {(selectedDishDetail.item.prepMins || selectedDishDetail.item.eta) && <p className={`text-xs ${ui.textMuted}`}>{selectedDishDetail.item.prepMins ? `Ready in about ${selectedDishDetail.chef ? getHomeDishPrepMins(chefs.find((chef) => chef.id === selectedDishDetail.chef.id) || selectedDishDetail.chef, selectedDishDetail.item) : selectedDishDetail.item.prepMins} mins` : `Delivery ${selectedDishDetail.item.eta}`}</p>}
                <button type="button" onClick={() => {
                  const selection = selectedDishDetail;
                  setSelectedDishDetail(null);
                  if (selection.chef) openCustomizeModal(selection.item, selection.chef);
                  else addDirectToCart(selection.item, selection.sourceName, selection.sourceType);
                }} className={`w-full rounded-xl py-3 font-bold text-sm ${ui.primaryBtn}`}>
                  {selectedDishDetail.chef ? 'Customize & Add' : 'Add to Cart'} • ₹{selectedDishDetail.item.price}
                </button>
              </aside>
            </div>
          </article>
        </div>
      )}

      {/* ======================================================================
          DRAWER 1: MY ORDERS & TABLE BOOKINGS HISTORY DRAWER
         ====================================================================== */}
      {isHistoryOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex justify-end">
          <div
            className={`w-full max-w-md border-l h-full flex flex-col p-6 overflow-y-auto space-y-6 ${ui.cardBg}`}
          >
            <div
              className={`flex items-center justify-between pb-4 border-b ${
                isDark ? 'border-[#1E2922]' : 'border-[#EAECEF]'
              }`}
            >
              <div>
                <h3 className={`text-2xl font-extrabold ${ui.textPrimary}`}>
                  My Orders &amp; Bookings
                </h3>
                <p className={`text-xs ${ui.textMuted}`}>
                  {currentUser ? currentUser.name : 'Account Activity'}
                </p>
              </div>
              <button
                onClick={() => setIsHistoryOpen(false)}
                className={`p-2 rounded-full ${ui.subCardBg} ${ui.textMuted}`}
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Dineout Table Reservations */}
            <div className="space-y-3">
              <h4 className={`text-xs font-extrabold uppercase tracking-wider ${ui.accentText}`}>
                Confirmed Dineout Tables ({bookings.length})
              </h4>
              {bookings.length === 0 ? (
                <p className={`text-xs p-4 rounded-2xl border ${ui.subCardBg} ${ui.textMuted}`}>
                  No table reservations yet. Visit the Dineout tab to book a table!
                </p>
              ) : (
                bookings.map((bk) => (
                  <div
                    key={bk.id}
                    className={`p-4 rounded-2xl border space-y-1.5 ${ui.subCardBg}`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`text-sm font-extrabold ${ui.textPrimary}`}>
                        {bk.venueName}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-[#16A34A] text-white font-mono text-[10px] font-bold">
                        {bk.code}
                      </span>
                    </div>
                    <p className={`text-xs ${ui.textMuted}`}>
                      {bk.date} • {bk.slot} • {bk.guests} Guests ({bk.zone})
                    </p>
                    <p className="text-[11px] font-bold text-[#16A34A]">{bk.offer}</p>
                  </div>
                ))
              )}
            </div>

            {/* Food & Pantry Orders */}
            <div className="space-y-3">
              <h4 className={`text-xs font-extrabold uppercase tracking-wider ${ui.accentText}`}>
                Food &amp; Pantry Orders ({orders.length})
              </h4>
              {orders.map((ord) => (
                <div
                  key={ord.id}
                  className={`p-4 rounded-2xl border space-y-2 ${ui.subCardBg}`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`font-mono text-xs font-extrabold ${ui.accentText}`}>
                      {ord.id}
                    </span>
                    <span className={`text-xs font-bold ${ui.textPrimary}`}>
                      ₹{ord.total} • {ord.status}
                    </span>
                  </div>
                  <div className={`text-xs ${ui.textMuted}`}>
                    {ord.items.map((i) => `${i.qty}× ${i.name}`).join(', ')}
                  </div>
                  <button
                    onClick={() => {
                      setIsHistoryOpen(false);
                      setActiveOrderTracker(ord);
                    }}
                    className={`text-xs font-bold underline ${ui.accentText}`}
                  >
                    Open Live Stepper
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ======================================================================
          DRAWER 2: WORKING SLIDE-OVER CART, GROUP BILL SPLITTER & CHECKOUT
         ====================================================================== */}
      {isCartOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex justify-end"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsCartOpen(false);
          }}
        >
          <div
            className={`w-full max-w-md border-l h-full flex flex-col justify-between p-6 overflow-y-auto shadow-2xl ${ui.cardBg}`}
          >
            <div className="space-y-5">
              {/* Cart Header */}
              <div
                className={`flex items-center justify-between pb-4 border-b ${
                  isDark ? 'border-[#1E2922]' : 'border-[#EAECEF]'
                }`}
              >
                <div>
                  <h3 className={`text-2xl font-extrabold ${ui.textPrimary}`}>
                    Your Cart ({totalCartItems})
                  </h3>
                  <p className={`text-xs ${ui.textMuted}`}>
                    Delivering to {selectedArea}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsCartOpen(false)}
                  aria-label="Close cart"
                  className={`p-2 rounded-full ${ui.subCardBg} ${ui.textMuted}`}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Empty Cart State with "Browse Dishes" Button */}
              {cart.length === 0 ? (
                <div className="py-16 text-center space-y-4">
                  <div
                    className={`w-16 h-16 rounded-full mx-auto flex items-center justify-center ${ui.primaryBadge} border`}
                  >
                    <ShoppingBag className="w-7 h-7" />
                  </div>
                  <div className="space-y-1">
                    <h4 className={`text-lg font-extrabold ${ui.textPrimary}`}>
                      Your cart is empty
                    </h4>
                    <p className={`text-xs max-w-xs mx-auto ${ui.textMuted}`}>
                      Add authentic home-cooked thalis, restaurant biryanis, or 15-minute Fresh Pantry staples.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setIsCartOpen(false);
                      setActiveTab('home-kitchens');
                    }}
                    className={`px-6 py-3 rounded-full font-bold text-xs ${ui.primaryBtn}`}
                  >
                    Browse Dishes
                  </button>
                </div>
              ) : (
                <>
                  {/* Cart Item List with - / + Steppers & Delete Button */}
                  <div className="space-y-3">
                    {cart.map((item) => (
                      <div
                        key={item.cartId}
                        className={`p-3.5 rounded-2xl border space-y-2 ${ui.subCardBg}`}
                      >
                        <div className="flex items-center justify-between gap-3">
                          <FoodImage
                            src={item.image}
                            alt={item.name}
                            className="w-14 h-14 rounded-xl shrink-0"
                            fallbackLabel={item.name}
                            isDark={isDark}
                          />
                          <div className="flex-1 min-w-0">
                            <span
                              className={`block text-[10px] font-bold uppercase tracking-wider truncate ${
                                isDark ? 'text-[#22C55E]' : 'text-[#FC8019]'
                              }`}
                            >
                              {item.sourceName}
                            </span>
                            <h4
                              className={`text-sm font-bold truncate mt-0.5 ${ui.textPrimary}`}
                            >
                              {item.name}
                            </h4>
                            <div className={`text-xs font-extrabold mt-0.5 ${ui.textPrimary}`}>
                              ₹{item.price * item.qty}
                            </div>
                          </div>

                          <div className="flex items-center gap-1.5">
                            <div
                              className={`flex items-center gap-2 border rounded-xl px-2 py-1 ${ui.cardBg}`}
                            >
                              <button
                                type="button"
                                onClick={() => updateCartQty(item.cartId, -1)}
                                className={ui.textMuted}
                              >
                                <Minus className="w-3.5 h-3.5" />
                              </button>
                              <span
                                className={`text-xs font-extrabold w-4 text-center ${ui.textPrimary}`}
                              >
                                {item.qty}
                              </span>
                              <button
                                type="button"
                                onClick={() => updateCartQty(item.cartId, 1)}
                                className={ui.accentText}
                              >
                                <Plus className="w-3.5 h-3.5" />
                              </button>
                            </div>

                            <button
                              type="button"
                              onClick={() => removeCartItem(item.cartId)}
                              aria-label="Remove item"
                              className={`p-1.5 rounded-lg ${ui.textMuted} hover:text-[#E23744]`}
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>

                        {item.customizations && (
                          <div className="flex flex-wrap gap-1.5 text-[10px] font-bold">
                            <span className={`px-2 py-0.5 rounded border ${ui.primaryBadge}`}>
                              {item.customizations.oil}
                            </span>
                            <span className={`px-2 py-0.5 rounded border ${ui.secondaryBadge}`}>
                              {item.customizations.spice} Spice
                            </span>
                            {item.customizations.extraGhee && (
                              <span className="px-2 py-0.5 rounded bg-[#16A34A]/15 text-[#16A34A]">
                                + Extra Ghee
                              </span>
                            )}
                            {item.customizations.grain && (
                              <span className={`px-2 py-0.5 rounded ${ui.cardBg} ${ui.textMuted}`}>
                                {item.customizations.grain}
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Working Group Cart Bill Splitter Toggle */}
                  <div className={`p-4 rounded-2xl border space-y-3 ${ui.subCardBg}`}>
                    <div className="flex items-center justify-between">
                      <div className={`flex items-center gap-2 text-xs font-bold ${ui.textPrimary}`}>
                        <Users
                          className={`w-4 h-4 ${
                            isDark ? 'text-[#22C55E]' : 'text-[#FC8019]'
                          }`}
                        />
                        <span>Group Cart Bill Splitter</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setGroupSplitEnabled((prev) => !prev)}
                        className={`w-11 h-6 rounded-full p-0.5 transition-colors ${
                          groupSplitEnabled
                            ? isDark
                              ? 'bg-[#22C55E]'
                              : 'bg-[#E23744]'
                            : isDark
                            ? 'bg-[#1E2922]'
                            : 'bg-gray-300'
                        }`}
                      >
                        <div
                          className={`w-5 h-5 rounded-full bg-white transition-transform ${
                            groupSplitEnabled ? 'translate-x-5' : 'translate-x-0'
                          }`}
                        />
                      </button>
                    </div>

                    {groupSplitEnabled && (
                      <div className="space-y-3 pt-1">
                        <form onSubmit={handleAddFriendToSplit} className="flex gap-2">
                          <input
                            type="text"
                            value={newFriendName}
                            onChange={(e) => setNewFriendName(e.target.value)}
                            placeholder="Add friend name..."
                            className={`flex-1 px-3 py-1.5 rounded-xl border text-xs focus:outline-none ${ui.inputBg}`}
                          />
                          <button
                            type="submit"
                            className={`px-3 py-1.5 rounded-xl text-xs font-bold ${ui.primaryBtn}`}
                          >
                            + Add
                          </button>
                        </form>

                        <div className="flex flex-wrap gap-1.5">
                          <span
                            className={`px-2.5 py-1 rounded-full text-[11px] font-bold border ${ui.primaryBadge}`}
                          >
                            You
                          </span>
                          {groupFriends.map((fr) => (
                            <span
                              key={fr}
                              className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold border ${ui.secondaryBadge}`}
                            >
                              <span>{fr}</span>
                              <button
                                type="button"
                                onClick={() =>
                                  setGroupFriends((prev) =>
                                    prev.filter((item) => item !== fr)
                                  )
                                }
                              >
                                <X className="w-3 h-3" />
                              </button>
                            </span>
                          ))}
                        </div>

                        <div
                          className={`p-3 rounded-xl border flex items-center justify-between text-xs ${ui.cardBg}`}
                        >
                          <div>
                            <span className={ui.textMuted}>
                              Split equally ({cartCalculations.splitCount} people):
                            </span>
                            <div className={`text-sm font-extrabold ${ui.accentText}`}>
                              ₹{cartCalculations.perPersonShare} / person
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() =>
                              triggerToast(
                                `Group split link copied! Share ₹${cartCalculations.perPersonShare}/person with ${groupFriends.join(', ') || 'friends'}.`
                              )
                            }
                            className={`px-3 py-1.5 rounded-lg border text-[11px] font-bold flex items-center gap-1 ${ui.primaryBadge}`}
                          >
                            <Share2 className="w-3 h-3" />
                            <span>Copy Split Link</span>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Promo Code Input + 1-Click Chips */}
                  <div className="space-y-2">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={promoCodeInput}
                        onChange={(e) => setPromoCodeInput(e.target.value)}
                        placeholder="Promo: ZEST50, GHARKA20, FREEDEL"
                        className={`flex-1 px-3.5 py-2 rounded-xl border text-xs uppercase focus:outline-none ${ui.inputBg}`}
                      />
                      <button
                        type="button"
                        onClick={() => handleApplyPromo()}
                        className={`px-4 py-2 rounded-xl border text-xs font-bold ${ui.primaryBadge}`}
                      >
                        Apply
                      </button>
                    </div>
                    <div className="flex flex-wrap items-center gap-1.5">
                      {['ZEST50', 'GHARKA20', 'FREEDEL'].map((code) => (
                        <button
                          key={code}
                          type="button"
                          onClick={() => handleApplyPromo(code)}
                          className={`px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold border ${
                            appliedPromo === code
                              ? ui.primaryBtn
                              : `${ui.subCardBg} ${ui.textMuted}`
                          }`}
                        >
                          {code}
                        </button>
                      ))}
                      {appliedPromo && (
                        <button
                          type="button"
                          onClick={() => {
                            setAppliedPromo(null);
                            setPromoCodeInput('');
                          }}
                          className="text-[10px] font-bold text-red-500 underline ml-1"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  </div>

                  {/* No Cutlery Checkbox & Delivery Note */}
                  <div className={`p-3.5 rounded-2xl border space-y-3 ${ui.subCardBg}`}>
                    <label className="flex items-center justify-between text-xs cursor-pointer">
                      <span className={`flex items-center gap-2 font-bold ${ui.textPrimary}`}>
                        <Leaf className="w-3.5 h-3.5 text-[#16A34A]" />
                        <span>No Cutlery Needed (Eco-Pledge)</span>
                      </span>
                      <input
                        type="checkbox"
                        checked={noCutlery}
                        onChange={(e) => setNoCutlery(e.target.checked)}
                        className="accent-[#16A34A] w-4 h-4"
                      />
                    </label>
                    <input
                      type="text"
                      value={deliveryNote}
                      onChange={(e) => setDeliveryNote(e.target.value)}
                      placeholder="Delivery note (e.g., Leave at door)..."
                      className={`w-full px-3 py-2 rounded-xl border text-xs focus:outline-none ${ui.inputBg}`}
                    />
                  </div>
                </>
              )}
            </div>

            {/* Bill Breakdown & Place Order Button */}
            {cart.length > 0 && (
              <div
                className={`pt-5 mt-6 border-t space-y-4 ${
                  isDark ? 'border-[#1E2922]' : 'border-[#EAECEF]'
                }`}
              >
                <div className="space-y-1.5 text-xs">
                  <div className={`flex justify-between ${ui.textMuted}`}>
                    <span>Item Subtotal</span>
                    <span>₹{cartCalculations.subtotal}</span>
                  </div>
                  <div className={`flex justify-between ${ui.textMuted}`}>
                    <span>Taxes &amp; Eco-Packaging (5%)</span>
                    <span>₹{cartCalculations.taxes}</span>
                  </div>
                  <div className={`flex justify-between ${ui.textMuted}`}>
                    <span>Delivery Partner Fee</span>
                    <span>₹{cartCalculations.deliveryFee}</span>
                  </div>
                  {cartCalculations.discount > 0 && (
                    <div className="flex justify-between text-[#16A34A] font-bold">
                      <span>Promo Savings ({appliedPromo})</span>
                      <span>-₹{cartCalculations.discount}</span>
                    </div>
                  )}
                  <div
                    className={`flex justify-between text-base font-extrabold pt-2 border-t ${
                      isDark ? 'border-[#1E2922]' : 'border-[#EAECEF]'
                    } ${ui.textPrimary}`}
                  >
                    <span>Grand Total</span>
                    <span className={ui.accentText}>₹{cartCalculations.total}</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handlePlaceOrder}
                  className={`w-full py-3.5 rounded-2xl font-bold text-sm transition-all ${ui.primaryBtn}`}
                >
                  {currentUser
                    ? `Place Order • ₹${cartCalculations.total}`
                    : `Sign In to Place Order • ₹${cartCalculations.total}`}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
