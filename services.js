export const CATEGORIES = [
  { id: "identity",   label: "Identity & Aadhaar",      icon: "🪪" },
  { id: "income",     label: "Income & Tax",             icon: "💰" },
  { id: "land",       label: "Land & Property",          icon: "🏡" },
  { id: "health",     label: "Health & Insurance",       icon: "🏥" },
  { id: "education",  label: "Education & Scholarships", icon: "🎓" },
  { id: "employment", label: "Employment & EPF",         icon: "💼" },
  { id: "business",   label: "Business & GST",           icon: "🏢" },
  { id: "vehicle",    label: "Vehicle & Driving",        icon: "🚗" },
  { id: "passport",   label: "Passport & Visa",          icon: "✈️" },
  { id: "agriculture",label: "Agriculture",              icon: "🌾" },
  { id: "pension",    label: "Pension & Senior",         icon: "👴" },
  { id: "women",      label: "Women & Child",            icon: "👩" },
]

// age: "all" | "student" | "adult" | "senior"
export const SERVICES = [
  // Identity
  { id: 1,  cat: "identity",   title: "Aadhaar Update / Correction",        desc: "Update your name, address, mobile or date of birth on Aadhaar card online.",                      link: "https://myaadhaar.uidai.gov.in",                                                   tag: "UIDAI",   age: "all" },
  { id: 2,  cat: "identity",   title: "PAN Card Apply / Correction",         desc: "Apply for new PAN or correct details on your existing PAN card via NSDL.",                        link: "https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html",             tag: "NSDL",    age: "adult" },
  { id: 3,  cat: "identity",   title: "Voter ID (EPIC) Apply / Correct",     desc: "Register as a voter, download e-EPIC, or update voter details on the ECI portal.",               link: "https://voters.eci.gov.in",                                                        tag: "ECI",     age: "adult" },
  { id: 4,  cat: "identity",   title: "DigiLocker — Store Documents",        desc: "Store Aadhaar, licence, marksheets and all government documents in one secure digital place.",    link: "https://digilocker.gov.in",                                                        tag: "MeitY",   age: "all" },

  // Income & Tax
  { id: 5,  cat: "income",     title: "Income Tax e-Filing",                 desc: "File your ITR returns, check refund status, and download Form 26AS officially.",                 link: "https://www.incometax.gov.in",                                                     tag: "IT Dept", age: "adult" },
  { id: 6,  cat: "income",     title: "Form 16 / 26AS Download",             desc: "Download TDS certificate (Form 16) and your Annual Tax Statement (26AS).",                       link: "https://www.incometax.gov.in/iec/foportal",                                        tag: "IT Dept", age: "adult" },
  { id: 7,  cat: "income",     title: "Tax Refund Status Check",             desc: "Track your income tax refund status using your PAN and assessment year.",                        link: "https://tin.tin.nsdl.com/oltas/refundstatuslogin.html",                           tag: "NSDL",    age: "adult" },
  { id: 8,  cat: "income",     title: "Instant e-PAN via Aadhaar",           desc: "Get a free PAN card instantly using your Aadhaar number — no documents needed.",                 link: "https://www.incometax.gov.in/iec/foportal/help/instant-e-pan",                    tag: "IT Dept", age: "adult" },

  // Land
  { id: 9,  cat: "land",       title: "PM Awas Yojana (Urban)",              desc: "Check eligibility and apply for affordable housing under PMAY Urban scheme.",                    link: "https://pmaymis.gov.in",                                                           tag: "MoHUA",   age: "adult" },
  { id: 10, cat: "land",       title: "Bhu-Naksha — Land Map Online",        desc: "View cadastral maps and land parcel details for most Indian states.",                            link: "https://bhunaksha.nic.in",                                                         tag: "NIC",     age: "all" },
  { id: 11, cat: "land",       title: "DORIS — Property Registration",       desc: "Online property document registration and stamp duty payment through NIC.",                      link: "https://doris.nic.in",                                                             tag: "NIC",     age: "adult" },
  { id: 12, cat: "land",       title: "PM Awas Yojana (Gramin)",             desc: "Rural housing scheme — check beneficiary list and apply in your village.",                       link: "https://pmayg.nic.in",                                                             tag: "MoRD",    age: "adult" },

  // Health
  { id: 13, cat: "health",     title: "Ayushman Bharat — PM-JAY",           desc: "Get free health insurance up to ₹5 lakh per family per year — check eligibility now.",           link: "https://pmjay.gov.in",                                                             tag: "NHA",     age: "all" },
  { id: 14, cat: "health",     title: "ABHA Health ID Create",               desc: "Create Ayushman Bharat Health Account (ABHA) for linked digital health records.",               link: "https://abha.abdm.gov.in",                                                         tag: "ABDM",    age: "all" },
  { id: 15, cat: "health",     title: "CoWIN — Vaccination Certificate",     desc: "Download your COVID-19 vaccination certificate from the official CoWIN portal.",                 link: "https://www.cowin.gov.in",                                                         tag: "MoHFW",   age: "all" },
  { id: 16, cat: "health",     title: "ESIC — Employee Health Insurance",    desc: "Check ESIC benefits, find dispensaries, and download your ESIC smart card.",                     link: "https://www.esic.in",                                                              tag: "ESIC",    age: "adult" },

  // Education
  { id: 17, cat: "education",  title: "NSP — National Scholarship Portal",   desc: "Apply for central and state government scholarships for all categories of students.",            link: "https://scholarships.gov.in",                                                      tag: "MoE",     age: "student" },
  { id: 18, cat: "education",  title: "DIKSHA — Free Learning Resources",    desc: "Free textbooks, courses, and educational content for students and teachers.",                    link: "https://diksha.gov.in",                                                            tag: "MoE",     age: "student" },
  { id: 19, cat: "education",  title: "NTA — JEE / NEET Admit Card",         desc: "Download admit cards and check results for JEE Main, NEET, CUET entrance exams.",               link: "https://nta.ac.in",                                                                tag: "NTA",     age: "student" },
  { id: 20, cat: "education",  title: "AICTE Pragati Scholarship (Girls)",   desc: "Scholarship for girl students enrolled in AICTE-approved technical courses.",                    link: "https://www.aicte-india.org/bureaus/scd/pragati-scholarship",                     tag: "AICTE",   age: "student" },

  // Employment
  { id: 21, cat: "employment", title: "EPF Passbook & UAN Services",         desc: "Check your PF balance, download passbook, and manage your UAN account.",                        link: "https://passbook.epfindia.gov.in",                                                 tag: "EPFO",    age: "adult" },
  { id: 22, cat: "employment", title: "NCS — National Career Service",       desc: "Find jobs, apprenticeships, and career counselling on the national government jobs portal.",     link: "https://www.ncs.gov.in",                                                           tag: "MoLE",    age: "adult" },
  { id: 23, cat: "employment", title: "e-SHRAM — Unorganised Workers",       desc: "Register as an unorganised worker and get e-SHRAM card for welfare scheme benefits.",           link: "https://eshram.gov.in",                                                            tag: "MoLE",    age: "adult" },
  { id: 24, cat: "employment", title: "PMSBY — Accidental Insurance (₹20/yr)",desc: "Pradhan Mantri Suraksha Bima Yojana — accident insurance for ₹20 per year via your bank.",    link: "https://www.jansuraksha.gov.in/Forms-PMSBY.aspx",                                 tag: "MoF",     age: "adult" },

  // Business
  { id: 25, cat: "business",   title: "GST Registration & Filing",           desc: "Register for GST, file returns, and check the GST number of any business.",                     link: "https://www.gst.gov.in",                                                           tag: "GSTN",    age: "adult" },
  { id: 26, cat: "business",   title: "Udyam Registration (MSME)",           desc: "Register your small or medium business and get Udyam certificate instantly online.",             link: "https://udyamregistration.gov.in",                                                 tag: "MSME",    age: "adult" },
  { id: 27, cat: "business",   title: "MCA — Company Registration",          desc: "Register a company, LLP, or check any company's details on the MCA21 portal.",                  link: "https://www.mca.gov.in",                                                           tag: "MCA",     age: "adult" },
  { id: 28, cat: "business",   title: "Startup India Registration",          desc: "Register your startup and get DPIIT recognition, tax benefits, and funding resources.",          link: "https://www.startupindia.gov.in",                                                  tag: "DPIIT",   age: "adult" },

  // Vehicle
  { id: 29, cat: "vehicle",    title: "Driving Licence Apply / Renew",       desc: "Apply for new DL, renew, add vehicle class, or download soft copy via Sarathi.",                link: "https://sarathi.parivahan.gov.in",                                                 tag: "MoRTH",   age: "adult" },
  { id: 30, cat: "vehicle",    title: "Vehicle RC & Challan Status",         desc: "Check RC details, pending challans, insurance and fitness status for any vehicle.",             link: "https://vahan.parivahan.gov.in",                                                   tag: "MoRTH",   age: "all" },
  { id: 31, cat: "vehicle",    title: "FASTag Recharge & Manage",            desc: "Recharge your FASTag, check wallet balance, and view transaction history.",                     link: "https://fastag.ihmcl.com",                                                         tag: "NPCI",    age: "adult" },

  // Passport
  { id: 32, cat: "passport",   title: "Passport Apply / Renew",              desc: "Apply for a new passport, renew your existing one, or track application status.",              link: "https://passportindia.gov.in",                                                     tag: "MEA",     age: "all" },
  { id: 33, cat: "passport",   title: "OCI Card Application",                desc: "Apply for Overseas Citizen of India card for foreign nationals of Indian origin.",             link: "https://ociservices.gov.in",                                                       tag: "MEA",     age: "all" },
  { id: 34, cat: "passport",   title: "eVisa for Foreigners",                desc: "Apply for e-Tourist, e-Business, or e-Medical visa to visit India online.",                    link: "https://indianvisaonline.gov.in/evisa/tvoa.html",                                  tag: "MEA",     age: "all" },

  // Agriculture
  { id: 35, cat: "agriculture",title: "PM-KISAN — Farmer Income Support",    desc: "Check eligibility, view payment status, and receive ₹6000/year under PM-KISAN.",               link: "https://pmkisan.gov.in",                                                           tag: "MoA",     age: "adult" },
  { id: 36, cat: "agriculture",title: "Pradhan Mantri Fasal Bima Yojana",    desc: "Crop insurance scheme for farmers — check eligibility and claim status online.",               link: "https://pmfby.gov.in",                                                             tag: "MoA",     age: "adult" },
  { id: 37, cat: "agriculture",title: "eNAM — Online Crop Marketplace",      desc: "Sell crops online to buyers across India via e-National Agriculture Market.",                  link: "https://www.enam.gov.in",                                                          tag: "MoA",     age: "adult" },

  // Pension
  { id: 38, cat: "pension",    title: "NPS — National Pension System",       desc: "Open NPS account, check balance, and download your pension statement.",                        link: "https://www.npscra.nsdl.co.in",                                                    tag: "PFRDA",   age: "adult" },
  { id: 39, cat: "pension",    title: "PM Vaya Vandana Yojana",              desc: "Pension scheme for senior citizens (60+) with guaranteed returns via LIC.",                    link: "https://licindia.in/products/pension-plans/pradhan-mantri-vaya-vandana-yojana", tag: "LIC",     age: "senior" },
  { id: 40, cat: "pension",    title: "IGNOAPS — Old Age Pension",           desc: "Indira Gandhi National Old Age Pension for BPL elderly citizens — apply via state.",           link: "https://nsap.nic.in",                                                              tag: "MoRD",    age: "senior" },

  // Women
  { id: 41, cat: "women",      title: "PM Matru Vandana Yojana",             desc: "₹5000 maternity benefit for first live birth — apply under PMMVY scheme.",                     link: "https://pmmvy.wcd.gov.in",                                                         tag: "WCD",     age: "adult" },
  { id: 42, cat: "women",      title: "Beti Bachao Beti Padhao",             desc: "Girl child welfare schemes — check state-wise programmes and eligibility.",                    link: "https://wcd.nic.in/bbbp-schemes",                                                  tag: "WCD",     age: "all" },
  { id: 43, cat: "women",      title: "One Stop Centre (Sakhi)",             desc: "Support for women facing violence — find nearest OSC shelter and helpline.",                   link: "https://wcd.nic.in/schemes/one-stop-centre-scheme",                                tag: "WCD",     age: "adult" },
]

export const AGE_FILTERS = [
  { id: "all",     label: "All Citizens" },
  { id: "student", label: "Students" },
  { id: "adult",   label: "Adults (18+)" },
  { id: "senior",  label: "Senior Citizens" },
]
