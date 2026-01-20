export const products = [
  {
    id: "iphone-11",
    name: "Apple iPhone 11",
    brand: "Apple iPhone",
    model: "iPhone 11",
    year: 2019,
    storage: ["64GB", "128GB", "256GB"],
    colors: ["Black", "White", "Purple", "Yellow", "Green", "Red"],
    pricing: {
      "64GB": {
        deposit: 14999,
        weekly: 1460,
        monthly: 6240,
        depositRange: "Ksh 20k to 25k",
        totalPrice: 39999,
        retailPrice: 54999,
        savings: 15000
      },
      "128GB": {
        deposit: 16199,
        weekly: 1660,
        monthly: 7100,
        depositRange: "Ksh 25k to 30k",
        totalPrice: 45999,
        retailPrice: 62999,
        savings: 17000
      },
      "256GB": {
        deposit: 18999,
        weekly: 1890,
        monthly: 8070,
        depositRange: "Ksh 30k to 40k",
        totalPrice: 52999,
        retailPrice: 72999,
        savings: 20000
      }
    },
    discount: "27% Off new",
    condition: "Excellent",
    rating: 4.7,
    reviewCount: 1249,
    images: [
      "/iphone-11-main.png",
      "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=800",
      "https://images.unsplash.com/photo-1592286927405-1d0d9c78e4aa?w=800",
      "https://images.unsplash.com/photo-1611472173362-3f53dbd65d80?w=800",
      "https://images.unsplash.com/photo-1621768216002-5ac171876625?w=800"
    ],
    description: `The Apple iPhone 11 combines powerful performance, an advanced dual-camera system, and Apple's legendary build quality into a device designed to feel fast, reliable, and premium every day. This certified renewed iPhone 11 has been professionally inspected, tested, and refurbished to meet strict quality standards, ensuring it delivers the same smooth experience you expect from a new device — at a significantly better price.

DESIGN & BUILD QUALITY
The iPhone 11 features a precision-engineered aluminum frame paired with durable glass on both the front and back. It feels solid in hand while remaining comfortable for daily use. Rated Excellent condition, it shows minimal cosmetic wear with possible minor scratches that are barely visible.

DISPLAY
6.1-inch Liquid Retina HD display with True Tone and wide color (P3), delivering sharp visuals, natural colors, and excellent brightness for indoor and outdoor use. Perfect for streaming, gaming, and everyday tasks.

PERFORMANCE
Powered by Apple's A13 Bionic chip with third-generation Neural Engine, the iPhone 11 handles multitasking, gaming, streaming, and everyday apps smoothly with excellent power efficiency. iOS updates ensure you stay current with the latest features.

CAMERAS
Dual 12MP rear cameras (Wide + Ultra-Wide) with Night Mode, Smart HDR, and 4K video recording at 60fps. Capture stunning photos in any lighting condition. 12MP TrueDepth front camera supports Face ID, selfies, Portrait mode, and 4K video calls.

BATTERY & CHARGING
All-day battery life with fast charging capability (18W adapter sold separately) and Qi wireless charging support. Video playback up to 17 hours.

SECURITY & SOFTWARE
Face ID facial recognition, regular iOS updates, full App Store access, and seamless integration with the Apple ecosystem including iCloud, AirDrop, and Continuity features.

CONNECTIVITY
4G LTE with Gigabit-class speeds, Dual SIM (Nano-SIM + eSIM), Wi-Fi 6, Bluetooth 5.0, NFC with reader mode, GPS with GLONASS, spatial audio playback, and stereo speakers.

WATER RESISTANCE
IP68 rating - water resistant up to 2 meters for 30 minutes.

WHAT'S IN THE BOX
iPhone 11 (Renewed), USB-C to Lightning cable, SIM ejector tool, quick start guide.`,
    shortDescription: "Powerful dual-camera system, all-day battery, and the A13 Bionic chip for smooth performance.",
    features: [
      "6.1-inch Liquid Retina HD display",
      "A13 Bionic chip with Neural Engine",
      "Dual 12MP Ultra Wide and Wide cameras",
      "Night Mode and 4K video up to 60fps",
      "12MP TrueDepth front camera with Portrait mode",
      "Face ID for secure authentication",
      "Water and dust resistant (IP68)",
      "Fast-charge capable",
      "Wireless charging",
      "iOS with years of updates"
    ],
    specs: {
      display: {
        size: "6.1 inches",
        type: "Liquid Retina HD",
        resolution: "1792 x 828 pixels",
        ppi: "326 ppi",
        features: ["True Tone", "Wide color (P3)", "Haptic Touch"]
      },
      processor: {
        chip: "A13 Bionic",
        cpu: "6-core CPU",
        gpu: "4-core GPU",
        neuralEngine: "8-core Neural Engine"
      },
      camera: {
        rear: "Dual 12MP (Wide: ƒ/1.8, Ultra Wide: ƒ/2.4)",
        front: "12MP TrueDepth (ƒ/2.2)",
        features: ["Night Mode", "Smart HDR", "Portrait mode", "4K video @ 60fps", "Slo-mo", "Time-lapse"],
        zoom: "2x optical zoom out, up to 5x digital zoom"
      },
      battery: {
        videoPlayback: "Up to 17 hours",
        audioPlayback: "Up to 65 hours",
        charging: "Fast charging, Qi wireless charging"
      },
      connectivity: {
        network: "4G LTE",
        wifi: "Wi-Fi 6 (802.11ax)",
        bluetooth: "Bluetooth 5.0",
        nfc: "Yes with reader mode",
        sim: "Dual SIM (nano-SIM and eSIM)"
      },
      dimensions: {
        height: "150.9 mm",
        width: "75.7 mm",
        depth: "8.3 mm",
        weight: "194 grams"
      },
      other: {
        waterResistance: "IP68 (2m for 30 min)",
        faceID: "Yes",
        sensors: ["Face ID", "Barometer", "Three-axis gyro", "Accelerometer", "Proximity sensor", "Ambient light sensor"]
      }
    },
    inBox: [
      "iPhone 11 (Certified Renewed)",
      "USB-C to Lightning Cable",
      "SIM Ejector Tool",
      "Documentation"
    ],
    warranty: {
      duration: "12 months",
      coverage: "Hardware defects and manufacturer issues",
      excludes: ["Physical damage", "Water damage", "Theft", "Loss"]
    },
    eligibility: {
      paymentPlan: true,
      cashPayment: true,
      requiredDocuments: ["National ID", "Proof of income", "Guarantor details"],
      approvalTime: "15 minutes",
      minimumDeposit: "35%"
    },
    delivery: {
      nairobi: "Next day delivery",
      nationwide: "2-3 business days",
      cost: "Free within Nairobi",
      payOnDelivery: true
    },
    returns: {
      period: "48 hours",
      conditions: ["No physical damage", "Original packaging included", "All accessories present"],
      refundMethod: "Full refund to original payment method"
    },
    tags: ["bestseller", "premium", "dual-camera", "face-id", "wireless-charging"],
    category: "Smartphones",
    subcategory: "Apple"
  },
  {
    id: "iphone-11-pro",
    name: "Apple iPhone 11 Pro",
    brand: "Apple iPhone",
    model: "iPhone 11 Pro",
    year: 2019,
    storage: ["64GB", "256GB", "512GB"],
    colors: ["Space Grey", "Silver", "Gold", "Midnight Green"],
    pricing: {
      "64GB": {
        deposit: 18999,
        weekly: 1840,
        monthly: 7860,
        depositRange: "Ksh 30k to 40k",
        totalPrice: 52999,
        retailPrice: 74999,
        savings: 22000
      },
      "256GB": {
        deposit: 21999,
        weekly: 2140,
        monthly: 9140,
        depositRange: "Ksh 30k to 40k",
        totalPrice: 61999,
        retailPrice: 89999,
        savings: 28000
      },
      "512GB": {
        deposit: 25999,
        weekly: 2540,
        monthly: 10850,
        depositRange: "Ksh 40k to 50k",
        totalPrice: 74999,
        retailPrice: 109999,
        savings: 35000
      }
    },
    discount: "32% Off new",
    condition: "Excellent",
    rating: 4.8,
    reviewCount: 892,
    images: [
      "https://images.unsplash.com/photo-1574755393849-623942496936?w=800",
      "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=800",
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800",
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800"
    ],
    description: `The iPhone 11 Pro represents Apple's pinnacle of smartphone engineering from 2019, featuring a stunning Super Retina XDR display, professional-grade triple camera system, and all-day battery life in a premium stainless steel and textured matte glass design.

DESIGN & BUILD QUALITY
Precision-crafted with surgical-grade stainless steel band and textured matte glass back. The most durable glass ever in a smartphone. Available in four stunning finishes. Our Excellent condition units show minimal signs of use.

DISPLAY
5.8-inch Super Retina XDR OLED display with 2,000,000:1 contrast ratio, HDR, True Tone, and wide color (P3). The brightest display Apple has made with incredible color accuracy for professionals and content creators.

PERFORMANCE
A13 Bionic chip with third-generation Neural Engine delivers desktop-class performance in your pocket. Handles 4K video editing, intensive gaming, and complex multitasking with ease.

PRO CAMERA SYSTEM
Revolutionary triple 12MP camera system (Ultra Wide ƒ/2.4, Wide ƒ/1.8, Telephoto ƒ/2.0) with Night mode across all cameras, Deep Fusion, Smart HDR, and 4K video at 60fps. Professional-level computational photography.

BATTERY
Longest battery life ever in an iPhone 11 model - up to 18 hours video playback. Fast charging (18W adapter included) and wireless charging.

SECURITY & PRIVACY
Face ID, the most secure facial authentication in a smartphone. Industry-leading privacy features built into iOS.

CONNECTIVITY
Gigabit-class LTE, Wi-Fi 6, Bluetooth 5.0, Ultra Wideband chip for spatial awareness, NFC with reader mode, Dual SIM.

WATER RESISTANCE
IP68 rating - water resistant up to 4 meters for 30 minutes, the highest rating in the iPhone 11 series.

AUDIO
Spatial audio playback, Dolby Atmos support, and studio-quality microphones for incredible sound.

WHAT'S IN THE BOX
iPhone 11 Pro (Renewed), USB-C to Lightning cable, 18W USB-C power adapter, EarPods with Lightning connector, SIM ejector tool, documentation.`,
    shortDescription: "Pro camera system, Super Retina XDR display, and exceptional battery life in a premium design.",
    features: [
      "5.8-inch Super Retina XDR OLED display",
      "A13 Bionic chip with Neural Engine",
      "Triple 12MP camera system (Ultra Wide, Wide, Telephoto)",
      "Night mode on all cameras",
      "Deep Fusion and Smart HDR",
      "4K Dolby Vision HDR video recording",
      "Face ID",
      "IP68 water resistance (4m for 30 min)",
      "18W fast charger included",
      "All-day battery life",
      "Stainless steel and matte glass design"
    ],
    specs: {
      display: {
        size: "5.8 inches",
        type: "Super Retina XDR OLED",
        resolution: "2436 x 1125 pixels",
        ppi: "458 ppi",
        features: ["HDR", "True Tone", "Wide color (P3)", "Haptic Touch", "2,000,000:1 contrast ratio"]
      },
      processor: {
        chip: "A13 Bionic",
        cpu: "6-core CPU",
        gpu: "4-core GPU",
        neuralEngine: "8-core Neural Engine"
      },
      camera: {
        rear: "Triple 12MP (Ultra Wide ƒ/2.4, Wide ƒ/1.8, Telephoto ƒ/2.0)",
        front: "12MP TrueDepth (ƒ/2.2)",
        features: ["Night Mode on all cameras", "Deep Fusion", "Smart HDR", "Portrait mode with advanced bokeh", "4K video @ 60fps", "Extended dynamic range", "Audio zoom"],
        zoom: "2x optical zoom in, 2x optical zoom out, 10x digital zoom"
      },
      battery: {
        videoPlayback: "Up to 18 hours",
        videoStreaming: "Up to 11 hours",
        audioPlayback: "Up to 65 hours",
        charging: "Fast charging (50% in 30 min with 18W adapter), Qi wireless charging"
      },
      connectivity: {
        network: "Gigabit-class LTE",
        wifi: "Wi-Fi 6 (802.11ax)",
        bluetooth: "Bluetooth 5.0",
        nfc: "Yes with reader mode",
        sim: "Dual SIM (nano-SIM and eSIM)",
        uwb: "Ultra Wideband chip for spatial awareness"
      },
      dimensions: {
        height: "144.0 mm",
        width: "71.4 mm",
        depth: "8.1 mm",
        weight: "188 grams"
      },
      other: {
        waterResistance: "IP68 (4m for 30 min)",
        faceID: "Yes",
        materials: "Surgical-grade stainless steel, textured matte glass",
        sensors: ["Face ID", "Barometer", "Three-axis gyro", "Accelerometer", "Proximity sensor", "Ambient light sensor"]
      }
    },
    inBox: [
      "iPhone 11 Pro (Certified Renewed)",
      "USB-C to Lightning Cable",
      "18W USB-C Power Adapter",
      "EarPods with Lightning Connector",
      "SIM Ejector Tool",
      "Documentation"
    ],
    warranty: {
      duration: "12 months",
      coverage: "Hardware defects and manufacturer issues",
      excludes: ["Physical damage", "Water damage beyond IP68 rating", "Theft", "Loss"]
    },
    eligibility: {
      paymentPlan: true,
      cashPayment: true,
      requiredDocuments: ["National ID", "Proof of income", "Guarantor details"],
      approvalTime: "15 minutes",
      minimumDeposit: "35%"
    },
    delivery: {
      nairobi: "Next day delivery",
      nationwide: "2-3 business days",
      cost: "Free within Nairobi",
      payOnDelivery: true
    },
    returns: {
      period: "48 hours",
      conditions: ["No physical damage", "Original packaging included", "All accessories present"],
      refundMethod: "Full refund to original payment method"
    },
    tags: ["premium", "pro-camera", "oled", "telephoto", "professional"],
    category: "Smartphones",
    subcategory: "Apple"
  },
  {
    id: "iphone-12",
    name: "Apple iPhone 12",
    brand: "Apple iPhone",
    model: "iPhone 12",
    year: 2020,
    storage: ["64GB", "128GB", "256GB"],
    colors: ["Black", "White", "Blue", "Green", "Purple", "Red"],
    pricing: {
      "64GB": {
        deposit: 19999,
        weekly: 1940,
        monthly: 8290,
        depositRange: "Ksh 30k to 40k",
        totalPrice: 54999,
        retailPrice: 74999,
        savings: 20000
      },
      "128GB": {
        deposit: 22499,
        weekly: 2190,
        monthly: 9350,
        depositRange: "Ksh 35k to 45k",
        totalPrice: 62999,
        retailPrice: 84999,
        savings: 22000
      },
      "256GB": {
        deposit: 25999,
        weekly: 2540,
        monthly: 10850,
        depositRange: "Ksh 40k to 50k",
        totalPrice: 72999,
        retailPrice: 99999,
        savings: 27000
      }
    },
    discount: "27% Off new",
    condition: "Excellent",
    rating: 4.8,
    reviewCount: 1567,
    images: [
      "https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=800",
      "https://images.unsplash.com/photo-1611472173362-3f53dbd65d80?w=800",
      "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=800",
      "https://images.unsplash.com/photo-1602526212253-070c4a5e53d7?w=800"
    ],
    description: `The iPhone 12 brings 5G speed, A14 Bionic chip, edge-to-edge OLED display, and the revolutionary Ceramic Shield front cover in a sleek new design with aerospace-grade aluminum edges.

DESIGN & DURABILITY
All-new flat-edge design with aerospace-grade aluminum, Ceramic Shield front cover (4x better drop performance), and precision-milled glass back. Our Excellent condition units are pristine with barely visible signs of use.

DISPLAY
6.1-inch Super Retina XDR OLED display with HDR, True Tone, and 2,000,000:1 contrast ratio. Brighter and more colorful than ever.

5G CONNECTIVITY
Superfast 5G for faster downloads, higher quality streaming, and more responsive gaming. Smart Data mode saves battery when you don't need 5G speed.

PERFORMANCE
A14 Bionic, the fastest chip in a smartphone, with next-generation Neural Engine for incredible performance and efficiency.

ADVANCED DUAL-CAMERA
Dual 12MP system (Ultra Wide and Wide) with Night mode, Deep Fusion, Smart HDR 3, and Dolby Vision HDR recording. Computational photography at its finest.

MAGSAFE
Revolutionary new MagSafe system for wireless charging and easy attachment of accessories.

WHAT'S IN THE BOX
iPhone 12 (Renewed), USB-C to Lightning cable, SIM ejector tool, documentation.`,
    shortDescription: "5G speed, A14 Bionic, Ceramic Shield, and stunning OLED display in a new design.",
    features: [
      "6.1-inch Super Retina XDR display",
      "5G capable",
      "A14 Bionic chip",
      "Dual-camera system with Night mode",
      "Dolby Vision HDR video recording",
      "Ceramic Shield front cover",
      "MagSafe wireless charging",
      "IP68 water resistance",
      "Face ID",
      "iOS with latest updates"
    ],
    specs: {
      display: {
        size: "6.1 inches",
        type: "Super Retina XDR OLED",
        resolution: "2532 x 1170 pixels",
        ppi: "460 ppi",
        features: ["HDR", "True Tone", "Wide color (P3)", "Haptic Touch", "2,000,000:1 contrast ratio", "1200 nits peak brightness"]
      },
      processor: {
        chip: "A14 Bionic",
        cpu: "6-core CPU",
        gpu: "4-core GPU",
        neuralEngine: "16-core Neural Engine"
      },
      camera: {
        rear: "Dual 12MP (Ultra Wide ƒ/2.4, Wide ƒ/1.6)",
        front: "12MP TrueDepth (ƒ/2.2)",
        features: ["Night mode", "Deep Fusion", "Smart HDR 3", "Dolby Vision HDR recording", "Night mode Time-lapse", "4K video @ 60fps"],
        zoom: "2x optical zoom out, up to 5x digital zoom"
      },
      battery: {
        videoPlayback: "Up to 17 hours",
        videoStreaming: "Up to 11 hours",
        audioPlayback: "Up to 65 hours",
        charging: "MagSafe wireless charging (15W), Qi wireless charging (7.5W), Fast charging (20W adapter sold separately)"
      },
      connectivity: {
        network: "5G (sub-6 GHz)",
        wifi: "Wi-Fi 6 (802.11ax)",
        bluetooth: "Bluetooth 5.0",
        nfc: "Yes with reader mode",
        sim: "Dual SIM (nano-SIM and eSIM)",
        uwb: "Ultra Wideband chip"
      },
      dimensions: {
        height: "146.7 mm",
        width: "71.5 mm",
        depth: "7.4 mm",
        weight: "164 grams"
      },
      other: {
        waterResistance: "IP68 (6m for 30 min)",
        faceID: "Yes",
        materials: "Aerospace-grade aluminum, Ceramic Shield front, glass back",
        magsafe: "Yes"
      }
    },
    inBox: [
      "iPhone 12 (Certified Renewed)",
      "USB-C to Lightning Cable",
      "SIM Ejector Tool",
      "Documentation"
    ],
    warranty: {
      duration: "12 months",
      coverage: "Hardware defects and manufacturer issues",
      excludes: ["Physical damage", "Water damage", "Theft", "Loss"]
    },
    eligibility: {
      paymentPlan: true,
      cashPayment: true,
      requiredDocuments: ["National ID", "Proof of income", "Guarantor details"],
      approvalTime: "15 minutes",
      minimumDeposit: "35%"
    },
    delivery: {
      nairobi: "Next day delivery",
      nationwide: "2-3 business days",
      cost: "Free within Nairobi",
      payOnDelivery: true
    },
    returns: {
      period: "48 hours",
      conditions: ["No physical damage", "Original packaging included", "All accessories present"],
      refundMethod: "Full refund to original payment method"
    },
    tags: ["5g", "bestseller", "ceramic-shield", "magsafe", "oled"],
    category: "Smartphones",
    subcategory: "Apple"
  },
  {
    id: "galaxy-s21",
    name: "Samsung Galaxy S21",
    brand: "Samsung",
    model: "Galaxy S21",
    year: 2021,
    storage: ["128GB", "256GB"],
    colors: ["Phantom Gray", "Phantom White", "Phantom Violet", "Phantom Pink"],
    pricing: {
      "128GB": {
        deposit: 15999,
        weekly: 1540,
        monthly: 6580,
        depositRange: "Ksh 20k to 25k",
        totalPrice: 42999,
        retailPrice: 54999,
        savings: 12000
      },
      "256GB": {
        deposit: 17999,
        weekly: 1740,
        monthly: 7430,
        depositRange: "Ksh 25k to 30k",
        totalPrice: 48999,
        retailPrice: 64999,
        savings: 16000
      }
    },
    discount: "22% Off new",
    condition: "Excellent",
    rating: 4.7,
    reviewCount: 1128,
    images: [
      "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=800",
      "https://images.unsplash.com/photo-1611803797179-f0c4ab58b992?w=800",
      "https://images.unsplash.com/photo-1611791483458-4b4f0e0e6b98?w=800",
      "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800"
    ],
    description: `The Samsung Galaxy S21 combines cutting-edge technology with premium design. Featuring a 120Hz display, powerful Exynos 2100 processor, versatile triple camera system, and all-day battery life in a sleek contour-cut camera design.

DESIGN & BUILD
Sophisticated contour-cut camera design with premium metal frame and matte finish back. Slim, lightweight, and elegant. IP68 water and dust resistance. Our Excellent condition units are pristine.

DISPLAY
6.2-inch Dynamic AMOLED 2X display with adaptive 120Hz refresh rate for buttery-smooth scrolling. Eye Comfort Shield reduces blue light. FHD+ resolution with vibrant colors.

PERFORMANCE
Exynos 2100 (or Snapdragon 888 in some regions) with 8GB RAM delivers flagship performance. Perfect for gaming, multitasking, and demanding apps.

CAMERA SYSTEM
Pro-grade triple camera: 64MP telephoto with 3x hybrid optical zoom, 12MP ultra-wide, 12MP wide with OIS. 8K video recording, Director's View, Single Take AI. 10MP selfie camera.

BATTERY
4,000mAh all-day battery with 25W super-fast charging, wireless charging, and wireless PowerShare.

ONE UI
Samsung's One UI with Android, featuring DeX mode, Edge panels, secure folder, and extensive customization.

CONNECTIVITY
5G ready, Wi-Fi 6, Bluetooth 5.0, NFC, USB-C 3.2, UWB support.

WHAT'S IN THE BOX
Galaxy S21 (Renewed), USB-C cable, SIM ejector tool, quick start guide.`,
    shortDescription: "120Hz AMOLED display, pro-grade triple camera with 8K video, and flagship Exynos performance.",
    features: [
      "6.2-inch Dynamic AMOLED 2X (120Hz)",
      "Exynos 2100 / Snapdragon 888",
      "8GB RAM",
      "64MP telephoto with 3x zoom",
      "8K video recording",
      "Director's View and Single Take",
      "4,000mAh battery",
      "25W fast charging",
      "IP68 water resistance",
      "5G connectivity",
      "Wireless PowerShare"
    ],
    specs: {
      display: {
        size: "6.2 inches",
        type: "Dynamic AMOLED 2X",
        resolution: "2400 x 1080 pixels (FHD+)",
        refreshRate: "120Hz adaptive",
        features: ["HDR10+", "Eye Comfort Shield", "Gorilla Glass Victus"]
      },
      processor: {
        chip: "Exynos 2100 / Snapdragon 888",
        cpu: "Octa-core",
        gpu: "Mali-G78 / Adreno 660",
        ram: "8GB"
      },
      camera: {
        rear: "Triple: 12MP Wide (OIS, ƒ/1.8) + 12MP Ultra-wide (ƒ/2.2) + 64MP Telephoto (OIS, ƒ/2.0)",
        front: "10MP (ƒ/2.2)",
        features: ["8K video @ 24fps", "4K @ 60fps", "Director's View", "Single Take", "Night mode", "Portrait mode", "Pro mode", "Super Steady"],
        zoom: "3x hybrid optical, up to 30x digital"
      },
      battery: {
        capacity: "4,000mAh",
        charging: "25W fast charging, 15W wireless charging, 4.5W reverse wireless charging",
        videoPlayback: "Up to 19 hours"
      },
      connectivity: {
        network: "5G",
        wifi: "Wi-Fi 6",
        bluetooth: "Bluetooth 5.0",
        nfc: "Yes",
        usb: "USB Type-C 3.2",
        sim: "Dual SIM (nano-SIM + eSIM)",
        uwb: "Ultra Wideband"
      },
      storage: {
        internal: "128GB / 256GB",
        expandable: "No"
      },
      dimensions: {
        height: "151.7 mm",
        width: "71.2 mm",
        depth: "7.9 mm",
        weight: "169 grams"
      },
      other: {
        waterResistance: "IP68",
        fingerprint: "Ultrasonic in-display",
        os: "Android with One UI",
        updates: "4 years security updates",
        audio: "Stereo speakers, Dolby Atmos"
      }
    },
    inBox: [
      "Galaxy S21 (Certified Renewed)",
      "USB-C to USB-C Cable",
      "SIM Ejector Tool",
      "Quick Start Guide"
    ],
    warranty: {
      duration: "12 months",
      coverage: "Hardware defects and manufacturer issues",
      excludes: ["Physical damage", "Water damage", "Theft", "Loss"]
    },
    eligibility: {
      paymentPlan: true,
      cashPayment: true,
      requiredDocuments: ["National ID", "Proof of income", "Guarantor details"],
      approvalTime: "15 minutes",
      minimumDeposit: "35%"
    },
    delivery: {
      nairobi: "Next day delivery",
      nationwide: "2-3 business days",
      cost: "Free within Nairobi",
      payOnDelivery: true
    },
    returns: {
      period: "48 hours",
      conditions: ["No physical damage", "Original packaging included", "All accessories present"],
      refundMethod: "Full refund to original payment method"
    },
    tags: ["5g", "120hz", "8k-video", "flagship", "samsung"],
    category: "Smartphones",
    subcategory: "Samsung"
  },
  {
    id: "iphone-13",
    name: "Apple iPhone 13",
    brand: "Apple iPhone",
    model: "iPhone 13",
    year: 2021,
    storage: ["128GB", "256GB", "512GB"],
    colors: ["Starlight", "Midnight", "Blue", "Pink", "Red", "Green"],
    pricing: {
      "128GB": {
        deposit: 24999,
        weekly: 2440,
        monthly: 10420,
        depositRange: "Ksh 35k to 45k",
        totalPrice: 69999,
        retailPrice: 94999,
        savings: 25000
      },
      "256GB": {
        deposit: 28999,
        weekly: 2840,
        monthly: 12130,
        depositRange: "Ksh 40k to 50k",
        totalPrice: 81999,
        retailPrice: 109999,
        savings: 28000
      },
      "512GB": {
        deposit: 34999,
        weekly: 3440,
        monthly: 14690,
        depositRange: "Ksh 50k to 60k",
        totalPrice: 99999,
        retailPrice: 134999,
        savings: 35000
      }
    },
    discount: "26% Off new",
    condition: "Excellent",
    rating: 4.9,
    reviewCount: 2341,
    images: [
      "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=800",
      "https://images.unsplash.com/photo-1663499482523-1c0d8c610537?w=800",
      "https://images.unsplash.com/photo-1632633173522-192e1c5a7e0c?w=800",
      "https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?w=800"
    ],
    description: `The iPhone 13 features the most advanced dual-camera system ever on iPhone, the A15 Bionic chip, huge leap in battery life, durable design, superfast 5G, and a brighter Super Retina XDR display.

DESIGN & DURABILITY
Sleek flat-edge design with aerospace-grade aluminum and Ceramic Shield front cover. Smaller notch for more display area. IP68 water resistance. Our Excellent condition units are flawless.

DISPLAY
6.1-inch Super Retina XDR OLED display 28% brighter than iPhone 12, with HDR, True Tone, and 2,000,000:1 contrast ratio. Perfect for HDR content and outdoor use.

PERFORMANCE
A15 Bionic chip with 5-core GPU delivers incredible performance and efficiency. 50% faster graphics than leading competition. All-day battery life.

ADVANCED CAMERA
Dual 12MP camera system with larger sensors and sensor-shift OIS. Cinematic mode for professional depth-of-field video. Photographic Styles, Smart HDR 4, Night mode on all cameras.

BATTERY LIFE
Up to 19 hours video playback - 2.5 hours more than iPhone 12. MagSafe and wireless charging support.

5G & CONNECTIVITY
Superfast 5G with Smart Data mode. Dual eSIM support, Wi-Fi 6, Bluetooth 5.0, Ultra Wideband.

WHAT'S IN THE BOX
iPhone 13 (Renewed), USB-C to Lightning cable, SIM ejector tool, documentation.`,
    shortDescription: "Advanced dual-camera with Cinematic mode, A15 Bionic chip, and exceptional battery life.",
    features: [
      "6.1-inch Super Retina XDR display",
      "A15 Bionic chip with 5-core GPU",
      "Dual 12MP camera with sensor-shift OIS",
      "Cinematic mode for video",
      "Photographic Styles",
      "Night mode on all cameras",
      "Up to 19 hours video playback",
      "5G connectivity",
      "Ceramic Shield front cover",
      "MagSafe compatibility",
      "IP68 water resistance"
    ],
    specs: {
      display: {
        size: "6.1 inches",
        type: "Super Retina XDR OLED",
        resolution: "2532 x 1170 pixels",
        ppi: "460 ppi",
        features: ["HDR", "True Tone", "Wide color (P3)", "Haptic Touch", "1200 nits peak brightness"]
      },
      processor: {
        chip: "A15 Bionic",
        cpu: "6-core CPU",
        gpu: "5-core GPU",
        neuralEngine: "16-core Neural Engine"
      },
      camera: {
        rear: "Dual 12MP (Wide ƒ/1.6 with sensor-shift OIS, Ultra Wide ƒ/2.4)",
        front: "12MP TrueDepth (ƒ/2.2)",
        features: ["Cinematic mode", "Photographic Styles", "Smart HDR 4", "Night mode", "Deep Fusion", "Dolby Vision HDR", "4K @ 60fps", "Sensor-shift OIS"],
        zoom: "2x optical zoom out, up to 5x digital zoom"
      },
      battery: {
        videoPlayback: "Up to 19 hours",
        videoStreaming: "Up to 15 hours",
        audioPlayback: "Up to 75 hours",
        charging: "MagSafe (15W), Qi wireless (7.5W), Fast charging (50% in 30 min with 20W adapter)"
      },
      connectivity: {
        network: "5G",
        wifi: "Wi-Fi 6",
        bluetooth: "Bluetooth 5.0",
        nfc: "Yes with reader mode",
        sim: "Dual SIM (nano-SIM and eSIM), Dual eSIM",
        uwb: "Ultra Wideband chip"
      },
      dimensions: {
        height: "146.7 mm",
        width: "71.5 mm",
        depth: "7.65 mm",
        weight: "174 grams"
      },
      other: {
        waterResistance: "IP68 (6m for 30 min)",
        faceID: "Yes",
        materials: "Aerospace-grade aluminum, Ceramic Shield front, glass back",
        magsafe: "Yes"
      }
    },
    inBox: [
      "iPhone 13 (Certified Renewed)",
      "USB-C to Lightning Cable",
      "SIM Ejector Tool",
      "Documentation"
    ],
    warranty: {
      duration: "12 months",
      coverage: "Hardware defects and manufacturer issues",
      excludes: ["Physical damage", "Water damage", "Theft", "Loss"]
    },
    eligibility: {
      paymentPlan: true,
      cashPayment: true,
      requiredDocuments: ["National ID", "Proof of income", "Guarantor details"],
      approvalTime: "15 minutes",
      minimumDeposit: "35%"
    },
    delivery: {
      nairobi: "Next day delivery",
      nationwide: "2-3 business days",
      cost: "Free within Nairobi",
      payOnDelivery: true
    },
    returns: {
      period: "48 hours",
      conditions: ["No physical damage", "Original packaging included", "All accessories present"],
      refundMethod: "Full refund to original payment method"
    },
    tags: ["5g", "bestseller", "cinematic-mode", "magsafe", "long-battery"],
    category: "Smartphones",
    subcategory: "Apple"
  },
  {
    id: "iphone-13-pro",
    name: "Apple iPhone 13 Pro",
    brand: "Apple iPhone",
    model: "iPhone 13 Pro",
    year: 2021,
    storage: ["128GB", "256GB", "512GB", "1TB"],
    colors: ["Graphite", "Gold", "Silver", "Sierra Blue", "Alpine Green"],
    pricing: {
      "128GB": {
        deposit: 32999,
        weekly: 3240,
        monthly: 13840,
        depositRange: "Ksh 50k to 60k",
        totalPrice: 94999,
        retailPrice: 129999,
        savings: 35000
      },
      "256GB": {
        deposit: 37999,
        weekly: 3740,
        monthly: 15970,
        depositRange: "Ksh 55k to 65k",
        totalPrice: 109999,
        retailPrice: 149999,
        savings: 40000
      },
      "512GB": {
        deposit: 44999,
        weekly: 4440,
        monthly: 18970,
        depositRange: "Ksh 65k to 75k",
        totalPrice: 129999,
        retailPrice: 179999,
        savings: 50000
      },
      "1TB": {
        deposit: 52999,
        weekly: 5240,
        monthly: 22390,
        depositRange: "Ksh 75k to 90k",
        totalPrice: 154999,
        retailPrice: 209999,
        savings: 55000
      }
    },
    discount: "27% Off new",
    condition: "Excellent",
    rating: 4.9,
    reviewCount: 1876,
    images: [
      "https://images.unsplash.com/photo-1639950044323-7f6e85ac75e0?w=800",
      "https://images.unsplash.com/photo-1642526565997-e628f4f64ed4?w=800",
      "https://images.unsplash.com/photo-1642790551116-18e150f248e8?w=800",
      "https://images.unsplash.com/photo-1641424222187-1c336d3f1e02?w=800"
    ],
    description: `The iPhone 13 Pro features a stunning Super Retina XDR display with ProMotion, pro camera system with new telephoto lens, macro photography, ProRes video, and exceptional performance with the A15 Bionic chip.

DESIGN & BUILD
Premium surgical-grade stainless steel frame with textured matte glass back. Sophisticated and durable. IP68 water resistance. Our Excellent condition units are pristine.

DISPLAY
6.1-inch Super Retina XDR display with ProMotion (10Hz-120Hz adaptive refresh rate) for incredibly smooth and responsive experience. 1000 nits sustained brightness, 1200 nits peak for HDR.

PERFORMANCE
A15 Bionic chip with 6-core CPU and 5-core GPU delivers professional-level performance. Perfect for ProRes video editing, intensive gaming, and demanding workflows.

PRO CAMERA SYSTEM
Revolutionary triple camera: 77mm telephoto (3x optical zoom), 12MP ultra-wide with macro, 12MP wide with larger sensor. Macro photography, Night mode portraits, ProRAW, ProRes video, Cinematic mode, Photographic Styles.

BATTERY
All-day battery life with up to 22 hours video playback. MagSafe and fast charging support.

LIDAR SCANNER
Night mode portraits, faster autofocus in low light, and enhanced AR experiences.

WHAT'S IN THE BOX
iPhone 13 Pro (Renewed), USB-C to Lightning cable, SIM ejector tool, documentation.`,
    shortDescription: "ProMotion 120Hz display, pro camera system with 3x telephoto and macro, ProRes video recording.",
    features: [
      "6.1-inch Super Retina XDR with ProMotion",
      "120Hz adaptive refresh rate",
      "A15 Bionic chip",
      "Pro camera system with 3x telephoto",
      "Macro photography",
      "ProRes and ProRAW",
      "Cinematic mode",
      "LiDAR Scanner",
      "Up to 22 hours battery life",
      "Surgical-grade stainless steel",
      "IP68 water resistance"
    ],
    specs: {
      display: {
        size: "6.1 inches",
        type: "Super Retina XDR OLED",
        resolution: "2532 x 1170 pixels",
        ppi: "460 ppi",
        refreshRate: "ProMotion 10-120Hz adaptive",
        features: ["HDR", "True Tone", "Wide color (P3)", "1000 nits sustained brightness", "1200 nits peak HDR"]
      },
      processor: {
        chip: "A15 Bionic",
        cpu: "6-core CPU",
        gpu: "5-core GPU",
        neuralEngine: "16-core Neural Engine"
      },
      camera: {
        rear: "Triple: 12MP Wide (ƒ/1.5, sensor-shift OIS) + 12MP Ultra Wide (ƒ/1.8, macro) + 12MP Telephoto (ƒ/2.8, 3x optical)",
        front: "12MP TrueDepth (ƒ/2.2)",
        features: ["Macro photography", "Night mode portraits", "ProRAW", "ProRes video", "Cinematic mode", "Photographic Styles", "Smart HDR 4", "LiDAR Scanner"],
        zoom: "3x optical zoom in, 2x optical zoom out, 6x optical zoom range, up to 15x digital zoom"
      },
      battery: {
        videoPlayback: "Up to 22 hours",
        videoStreaming: "Up to 20 hours",
        audioPlayback: "Up to 75 hours",
        charging: "MagSafe (15W), Qi wireless (7.5W), Fast charging"
      },
      connectivity: {
        network: "5G",
        wifi: "Wi-Fi 6",
        bluetooth: "Bluetooth 5.0",
        nfc: "Yes with reader mode",
        sim: "Dual SIM (nano-SIM and eSIM), Dual eSIM",
        uwb: "Ultra Wideband chip"
      },
      dimensions: {
        height: "146.7 mm",
        width: "71.5 mm",
        depth: "7.65 mm",
        weight: "204 grams"
      },
      other: {
        waterResistance: "IP68 (6m for 30 min)",
        faceID: "Yes",
        materials: "Surgical-grade stainless steel, textured matte glass",
        magsafe: "Yes",
        lidar: "Yes"
      }
    },
    inBox: [
      "iPhone 13 Pro (Certified Renewed)",
      "USB-C to Lightning Cable",
      "SIM Ejector Tool",
      "Documentation"
    ],
    warranty: {
      duration: "12 months",
      coverage: "Hardware defects and manufacturer issues",
      excludes: ["Physical damage", "Water damage", "Theft", "Loss"]
    },
    eligibility: {
      paymentPlan: true,
      cashPayment: true,
      requiredDocuments: ["National ID", "Proof of income", "Guarantor details"],
      approvalTime: "15 minutes",
      minimumDeposit: "35%"
    },
    delivery: {
      nairobi: "Next day delivery",
      nationwide: "2-3 business days",
      cost: "Free within Nairobi",
      payOnDelivery: true
    },
    returns: {
      period: "48 hours",
      conditions: ["No physical damage", "Original packaging included", "All accessories present"],
      refundMethod: "Full refund to original payment method"
    },
    tags: ["premium", "pro-camera", "120hz", "prores", "telephoto", "macro"],
    category: "Smartphones",
    subcategory: "Apple"
  },
  {
    id: "galaxy-a54",
    name: "Samsung Galaxy A54",
    brand: "Samsung",
    model: "Galaxy A54",
    year: 2023,
    storage: ["128GB", "256GB"],
    colors: ["Awesome Graphite", "Awesome Violet", "Awesome Lime", "Awesome White"],
    pricing: {
      "128GB": {
        deposit: 12999,
        weekly: 1240,
        monthly: 5300,
        depositRange: "Ksh 15k to 20k",
        totalPrice: 34999,
        retailPrice: 42999,
        savings: 8000
      },
      "256GB": {
        deposit: 14999,
        weekly: 1440,
        monthly: 6150,
        depositRange: "Ksh 20k to 25k",
        totalPrice: 39999,
        retailPrice: 49999,
        savings: 10000
      }
    },
    discount: "19% Off new",
    condition: "Excellent",
    rating: 4.5,
    reviewCount: 956,
    images: [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800",
      "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=800",
      "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800"
    ],
    description: `The Samsung Galaxy A54 delivers premium features at an accessible price. Enjoy a stunning 120Hz AMOLED display, versatile triple camera with OIS, powerful Exynos processor, and long-lasting 5,000mAh battery.

DESIGN & BUILD
Modern design with Gorilla Glass 5 protection front and back. IP67 water and dust resistance. Slim profile with premium feel. Our Excellent condition units are flawless.

DISPLAY
6.4-inch Super AMOLED display with 120Hz refresh rate for smooth scrolling and gaming. FHD+ resolution with vibrant colors and deep blacks. Vision Booster for outdoor visibility.

PERFORMANCE
Exynos 1380 processor with 8GB RAM delivers smooth performance for multitasking, gaming, and everyday use. Expandable storage up to 1TB.

CAMERA SYSTEM
Triple camera setup: 50MP main with OIS for stable shots, 12MP ultra-wide for landscapes, 5MP macro for close-ups. Night mode, Portrait mode, and 4K video recording. 32MP selfie camera.

BATTERY
Massive 5,000mAh battery for multi-day use with 25W fast charging. Power through your day without worry.

SOFTWARE
One UI based on Android with 4 years of OS updates and 5 years of security patches. Feature-rich with customization options.

CONNECTIVITY
5G ready, Wi-Fi 6, Bluetooth 5.3, NFC, USB-C.

WHAT'S IN THE BOX
Galaxy A54 (Renewed), USB-C cable, SIM ejector tool, quick start guide.`,
    shortDescription: "120Hz Super AMOLED, 50MP camera with OIS, 5,000mAh battery, and 4 years of updates.",
    features: [
      "6.4-inch Super AMOLED (120Hz)",
      "Exynos 1380 processor",
      "8GB RAM + expandable storage",
      "50MP main camera with OIS",
      "32MP front camera",
      "5,000mAh battery",
      "25W fast charging",
      "IP67 water resistance",
      "Gorilla Glass 5",
      "5G connectivity",
      "4 years of OS updates"
    ],
    specs: {
      display: {
        size: "6.4 inches",
        type: "Super AMOLED",
        resolution: "2340 x 1080 pixels (FHD+)",
        refreshRate: "120Hz",
        features: ["Vision Booster", "Gorilla Glass 5"]
      },
      processor: {
        chip: "Exynos 1380",
        cpu: "Octa-core",
        gpu: "Mali-G68",
        ram: "8GB"
      },
      camera: {
        rear: "Triple: 50MP Wide (OIS, ƒ/1.8) + 12MP Ultra-wide (ƒ/2.2) + 5MP Macro (ƒ/2.4)",
        front: "32MP (ƒ/2.2)",
        features: ["OIS", "Night mode", "Portrait mode", "Pro mode", "Single Take", "4K video @ 30fps"],
        zoom: "Up to 10x digital zoom"
      },
      battery: {
        capacity: "5,000mAh",
        charging: "25W fast charging",
        videoPlayback: "Up to 21 hours"
      },
      connectivity: {
        network: "5G",
        wifi: "Wi-Fi 6",
        bluetooth: "Bluetooth 5.3",
        nfc: "Yes",
        usb: "USB Type-C 2.0",
        sim: "Dual SIM (nano-SIM + eSIM)"
      },
      storage: {
        internal: "128GB / 256GB",
        expandable: "microSD up to 1TB"
      },
      dimensions: {
        height: "158.2 mm",
        width: "76.7 mm",
        depth: "8.2 mm",
        weight: "202 grams"
      },
      other: {
        waterResistance: "IP67",
        fingerprint: "Under-display optical",
        os: "Android with One UI",
        updates: "4 years OS, 5 years security",
        audio: "Stereo speakers, Dolby Atmos"
      }
    },
    inBox: [
      "Galaxy A54 (Certified Renewed)",
      "USB-C to USB-C Cable",
      "SIM Ejector Tool",
      "Quick Start Guide"
    ],
    warranty: {
      duration: "12 months",
      coverage: "Hardware defects and manufacturer issues",
      excludes: ["Physical damage", "Water damage", "Theft", "Loss"]
    },
    eligibility: {
      paymentPlan: true,
      cashPayment: true,
      requiredDocuments: ["National ID", "Proof of income", "Guarantor details"],
      approvalTime: "15 minutes",
      minimumDeposit: "35%"
    },
    delivery: {
      nairobi: "Next day delivery",
      nationwide: "2-3 business days",
      cost: "Free within Nairobi",
      payOnDelivery: true
    },
    returns: {
      period: "48 hours",
      conditions: ["No physical damage", "Original packaging included", "All accessories present"],
      refundMethod: "Full refund to original payment method"
    },
    tags: ["5g", "120hz", "long-battery", "affordable", "expandable-storage"],
    category: "Smartphones",
    subcategory: "Samsung"
  },
  {
    id: "iphone-14",
    name: "Apple iPhone 14",
    brand: "Apple iPhone",
    model: "iPhone 14",
    year: 2022,
    storage: ["128GB", "256GB", "512GB"],
    colors: ["Midnight", "Starlight", "Blue", "Purple", "Yellow", "Red"],
    pricing: {
      "128GB": {
        deposit: 29999,
        weekly: 2940,
        monthly: 12560,
        depositRange: "Ksh 45k to 55k",
        totalPrice: 84999,
        retailPrice: 114999,
        savings: 30000
      },
      "256GB": {
        deposit: 34999,
        weekly: 3440,
        monthly: 14690,
        depositRange: "Ksh 50k to 60k",
        totalPrice: 99999,
        retailPrice: 129999,
        savings: 30000
      },
      "512GB": {
        deposit: 41999,
        weekly: 4140,
        monthly: 17690,
        depositRange: "Ksh 60k to 75k",
        totalPrice: 119999,
        retailPrice: 159999,
        savings: 40000
      }
    },
    discount: "26% Off new",
    condition: "Excellent",
    rating: 4.8,
    reviewCount: 2156,
    images: [
      "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=800",
      "https://images.unsplash.com/photo-1663499482523-1c0d8c610537?w=800",
      "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=800",
      "https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?w=800"
    ],
    description: `The iPhone 14 features the powerful A15 Bionic chip, a dual-camera system with advanced features, improved battery life, and a sleek flat-edge design in a range of vibrant colors.

DESIGN & DURABILITY
Flat-edge design with aerospace-grade aluminum and Ceramic Shield front cover. Precision-engineered and durable. IP68 water resistance. Our Excellent condition units are pristine.

DISPLAY
6.1-inch Super Retina XDR OLED display with HDR, True Tone, and 2,000,000:1 contrast ratio. Bright and colorful display for all your content.

PERFORMANCE
A15 Bionic chip with 5-core GPU delivers fast performance for multitasking, gaming, and everyday apps. All-day battery life with fast charging support.

DUAL CAMERA
Dual 12MP system (Ultra Wide and Wide) with Night mode, Deep Fusion, Smart HDR 4, and Dolby Vision HDR recording. Enhanced computational photography.

MAGSAFE
Wireless charging with MagSafe for easy attachment of accessories and faster charging.

5G CONNECTIVITY
Superfast 5G support with Smart Data mode for better battery efficiency.

WHAT'S IN THE BOX
iPhone 14 (Renewed), USB-C to Lightning cable, SIM ejector tool, documentation.`,
    shortDescription: "A15 Bionic chip, dual-camera system, all-day battery, and vibrant OLED display.",
    features: [
      "6.1-inch Super Retina XDR display",
      "A15 Bionic chip",
      "Dual 12MP camera system",
      "Night mode and Deep Fusion",
      "Dolby Vision HDR video",
      "MagSafe wireless charging",
      "5G connectivity",
      "Ceramic Shield front",
      "IP68 water resistance",
      "All-day battery life"
    ],
    specs: {
      display: {
        size: "6.1 inches",
        type: "Super Retina XDR OLED",
        resolution: "2532 x 1170 pixels",
        ppi: "460 ppi",
        features: ["HDR", "True Tone", "Wide color (P3)", "Haptic Touch", "2,000,000:1 contrast ratio"]
      },
      processor: {
        chip: "A15 Bionic",
        cpu: "6-core CPU",
        gpu: "5-core GPU",
        neuralEngine: "16-core Neural Engine"
      },
      camera: {
        rear: "Dual 12MP (Ultra Wide ƒ/2.4, Wide ƒ/1.6)",
        front: "12MP TrueDepth (ƒ/2.2)",
        features: ["Night mode", "Deep Fusion", "Smart HDR 4", "Dolby Vision HDR", "4K video @ 60fps"],
        zoom: "2x optical zoom out, up to 5x digital zoom"
      },
      battery: {
        videoPlayback: "Up to 20 hours",
        videoStreaming: "Up to 16 hours",
        audioPlayback: "Up to 80 hours",
        charging: "MagSafe (15W), Qi wireless (7.5W), Fast charging"
      },
      connectivity: {
        network: "5G",
        wifi: "Wi-Fi 6",
        bluetooth: "Bluetooth 5.0",
        nfc: "Yes with reader mode",
        sim: "Dual SIM (nano-SIM and eSIM)",
        uwb: "Ultra Wideband chip"
      },
      dimensions: {
        height: "146.7 mm",
        width: "71.5 mm",
        depth: "7.80 mm",
        weight: "172 grams"
      },
      other: {
        waterResistance: "IP68 (6m for 30 min)",
        faceID: "Yes",
        materials: "Aerospace-grade aluminum, Ceramic Shield front, glass back",
        magsafe: "Yes"
      }
    },
    inBox: [
      "iPhone 14 (Certified Renewed)",
      "USB-C to Lightning Cable",
      "SIM Ejector Tool",
      "Documentation"
    ],
    warranty: {
      duration: "12 months",
      coverage: "Hardware defects and manufacturer issues",
      excludes: ["Physical damage", "Water damage", "Theft", "Loss"]
    },
    eligibility: {
      paymentPlan: true,
      cashPayment: true,
      requiredDocuments: ["National ID", "Proof of income", "Guarantor details"],
      approvalTime: "15 minutes",
      minimumDeposit: "35%"
    },
    delivery: {
      nairobi: "Next day delivery",
      nationwide: "2-3 business days",
      cost: "Free within Nairobi",
      payOnDelivery: true
    },
    returns: {
      period: "48 hours",
      conditions: ["No physical damage", "Original packaging included", "All accessories present"],
      refundMethod: "Full refund to original payment method"
    },
    tags: ["5g", "bestseller", "magsafe", "a15-bionic"],
    category: "Smartphones",
    subcategory: "Apple"
  },
  {
    id: "galaxy-s23-fe",
    name: "Samsung Galaxy S23 FE",
    brand: "Samsung",
    model: "Galaxy S23 FE",
    year: 2023,
    storage: ["128GB", "256GB"],
    colors: ["Cream", "Mint", "Graphite", "Purple"],
    pricing: {
      "128GB": {
        deposit: 17499,
        weekly: 1690,
        monthly: 7220,
        depositRange: "Ksh 25k to 30k",
        totalPrice: 47999,
        retailPrice: 59999,
        savings: 12000
      },
      "256GB": {
        deposit: 19999,
        weekly: 1940,
        monthly: 8290,
        depositRange: "Ksh 30k to 40k",
        totalPrice: 54999,
        retailPrice: 69999,
        savings: 15000
      }
    },
    discount: "20% Off new",
    condition: "Excellent",
    rating: 4.6,
    reviewCount: 734,
    images: [
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=800",
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800",
      "https://images.unsplash.com/photo-1617034395691-da48cb9f5f82?w=800",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800"
    ],
    description: `The Samsung Galaxy S23 FE (Fan Edition) delivers flagship features at an accessible price point. Experience the power of Snapdragon processing, versatile triple camera system, stunning AMOLED display, and all-day battery life.

DESIGN & BUILD
Premium metal and glass construction with slim bezels and modern aesthetics. IP68 water and dust resistance. Our Excellent condition units show minimal wear.

DISPLAY
6.4-inch Dynamic AMOLED 2X display with 120Hz adaptive refresh rate for smooth scrolling and gaming. FHD+ resolution with vibrant colors and deep blacks.

PERFORMANCE
Snapdragon 8 Gen 1 processor with 8GB RAM delivers flagship-level performance for gaming, multitasking, and productivity. Expandable storage via microSD (up to 1TB).

CAMERA SYSTEM
Versatile triple camera: 50MP main (OIS), 12MP ultra-wide, 8MP telephoto (3x optical zoom). AI-powered photography, Night mode, and 8K video recording. 10MP selfie camera.

BATTERY
4,500mAh battery with 25W fast charging, wireless charging, and reverse wireless charging to power your accessories.

ONE UI & SOFTWARE
Samsung's One UI based on Android with 4 years of OS updates and 5 years of security updates. Feature-rich experience with multitasking, customization, and productivity tools.

CONNECTIVITY
5G ready, Wi-Fi 6E, Bluetooth 5.3, NFC, USB-C 3.2.

SECURITY
In-display fingerprint sensor and Samsung Knox security platform.

WHAT'S IN THE BOX
Galaxy S23 FE (Renewed), USB-C cable, SIM ejector tool, quick start guide.`,
    shortDescription: "Flagship features including 120Hz AMOLED, triple camera with OIS, and powerful Snapdragon processor.",
    features: [
      "6.4-inch Dynamic AMOLED 2X (120Hz)",
      "Snapdragon 8 Gen 1 processor",
      "8GB RAM + expandable storage",
      "50MP main camera with OIS",
      "3x optical zoom telephoto",
      "8K video recording",
      "4,500mAh battery with fast charging",
      "IP68 water resistance",
      "In-display fingerprint sensor",
      "5G connectivity",
      "4 years of OS updates"
    ],
    specs: {
      display: {
        size: "6.4 inches",
        type: "Dynamic AMOLED 2X",
        resolution: "2340 x 1080 pixels (FHD+)",
        refreshRate: "120Hz adaptive",
        features: ["HDR10+", "Always-On Display", "Gorilla Glass 5"]
      },
      processor: {
        chip: "Snapdragon 8 Gen 1",
        cpu: "Octa-core",
        gpu: "Adreno 730",
        ram: "8GB"
      },
      camera: {
        rear: "Triple: 50MP Wide (OIS, ƒ/1.8) + 12MP Ultra-wide (ƒ/2.2) + 8MP Telephoto (OIS, ƒ/2.4, 3x optical)",
        front: "10MP (ƒ/2.4)",
        features: ["Night mode", "Portrait mode", "Pro mode", "Single Take", "8K video @ 24fps", "4K @ 60fps", "Super Steady video"],
        zoom: "3x optical, up to 30x digital"
      },
      battery: {
        capacity: "4,500mAh",
        charging: "25W fast charging, 15W wireless charging, 4.5W reverse wireless charging",
        videoPlayback: "Up to 20 hours"
      },
      connectivity: {
        network: "5G",
        wifi: "Wi-Fi 6E",
        bluetooth: "Bluetooth 5.3",
        nfc: "Yes",
        usb: "USB Type-C 3.2",
        sim: "Dual SIM (nano-SIM + eSIM)"
      },
      storage: {
        internal: "128GB / 256GB",
        expandable: "microSD up to 1TB"
      },
      dimensions: {
        height: "158.0 mm",
        width: "76.5 mm",
        depth: "8.2 mm",
        weight: "209 grams"
      },
      other: {
        waterResistance: "IP68",
        fingerprint: "Ultrasonic in-display",
        os: "Android with One UI",
        updates: "4 years OS, 5 years security",
        audio: "Stereo speakers, Dolby Atmos"
      }
    },
    inBox: [
      "Galaxy S23 FE (Certified Renewed)",
      "USB-C to USB-C Cable",
      "SIM Ejector Tool",
      "Quick Start Guide"
    ],
    warranty: {
      duration: "12 months",
      coverage: "Hardware defects and manufacturer issues",
      excludes: ["Physical damage", "Water damage", "Theft", "Loss"]
    },
    eligibility: {
      paymentPlan: true,
      cashPayment: true,
      requiredDocuments: ["National ID", "Proof of income", "Guarantor details"],
      approvalTime: "15 minutes",
      minimumDeposit: "35%"
    },
    delivery: {
      nairobi: "Next day delivery",
      nationwide: "2-3 business days",
      cost: "Free within Nairobi",
      payOnDelivery: true
    },
    returns: {
      period: "48 hours",
      conditions: ["No physical damage", "Original packaging included", "All accessories present"],
      refundMethod: "Full refund to original payment method"
    },
    tags: ["5g", "120hz", "expandable-storage", "telephoto", "samsung"],
    category: "Smartphones",
    subcategory: "Samsung"
  },
]