export const projectsData = [
  {
    id: "rag-legal-assistant",
    number: "01",
    shortTitle: "RAG-Based Question Answering System",
    title: "Design and Implementation of RAG Based Legal Document Assistant System Using LLM For Ethiopia Amharic Language",
    category: "Artificial Intelligence / NLP / LLM",
    scope: "Bachelor's Capstone Project · Debre Tabor University",
    date: "May 2026",
    team: "Ayalew Awoke (Lead), Elsabet Demeke, Rediet Wassyihun, Admasu Dessie",
    featuredImage: "/projects/rag-legal/chat_welcome.png",
    githubUrl: "https://github.com/Ayalew-Awoke",
    stats: [
      { label: "Semantic Accuracy", value: "71%" },
      { label: "Document Chunks", value: "2,345" },
      { label: "Legal Corpus", value: "39 Docs (208 MB)" },
      { label: "Search Strategy", value: "Hybrid (Dense + Sparse + Rerank)" }
    ],
    summary: "An intelligent retrieval-augmented legal assistant that enables Amharic speakers to query Ethiopian law in natural Amharic and receive accurate, grounded legal citations without hallucinations.",
    challenge: "Millions of Amharic speakers lack access to legal information. Legal documents are complex, written in formal language, and no intelligent tools exist to help citizens understand their rights. Traditional search fails completely—it doesn't understand meaning, only keywords.",
    solution: "I built an AI-powered legal assistant that understands questions in Amharic and retrieves accurate answers directly from Ethiopian law documents. The system combines three powerful search methods to find the most relevant legal information, then generates clear answers in Amharic.",
    whatIBuilt: [
      {
        title: "Backend Engine (Python + FastAPI)",
        points: [
          "Processes Amharic queries and generates high-dimensional embeddings",
          "Coordinates hybrid search pipeline (dense + sparse + reranking)",
          "Prevents false answers through strict context-grounding"
        ]
      },
      {
        title: "Intelligent Retrieval System",
        points: [
          "Dense semantic search (understands contextual meaning)",
          "Sparse keyword search with BM25 (matches exact legal terms and articles)",
          "Neural reranking (picks the highest confidence candidates)",
          "Vector database with 2,345 semantically organized legal chunks"
        ]
      },
      {
        title: "Large Language Model Integration",
        points: [
          "Generates accurate, fluent Amharic legal explanations",
          "Explicitly refuses to answer when verifiable information is unavailable",
          "Grounded strictly in verified Ethiopian legal proclamations"
        ]
      },
      {
        title: "User Interface",
        points: [
          "Clean, responsive chatbot interface",
          "Full Amharic / Ethiopic script (Fidel) typography support",
          "Real-time streaming responses",
          "User authentication, session management, and query history"
        ]
      }
    ],
    howItWorksSteps: [
      { step: "1", title: "User Question (Amharic)", desc: "Citizen inputs a query in Amharic regarding legal rights, bail, contracts, or court procedures." },
      { step: "2", title: "Query Processing", desc: "Unicode normalization, character cleaning, and query expansion for Ethiopic script nuances." },
      { step: "3", title: "Hybrid Search Fusion", desc: "Dense semantic search (30%) + Sparse BM25 exact matching (30%) + Cross-encoder Neural Re-ranking (40%)." },
      { step: "4", title: "Retrieved Legal Context", desc: "Extracts top verified chunks from 39 Ethiopian law proclamations." },
      { step: "5", title: "LLM Generation (LLaMA via GROQ)", desc: "Context-grounded prompt synthesizes the answer strictly based on retrieved articles." },
      { step: "6", title: "Amharic Answer Delivery", desc: "User receives clear, grammatically accurate Amharic explanation with exact legal source citations." }
    ],
    keyInnovation: {
      title: "Hybrid Retrieval Architecture (Dense + Sparse + Reranking)",
      desc: "Most retrieval systems use only one search method. We combined three: Dense search understands queries like 'What are bail requirements?' even if phrased differently; Sparse search catches exact legal terms like 'bail' or 'article 49'; Rank fusion balances semantic coverage with verbatim precision. Result: Superior coverage for low-resource legal domains."
    },
    technologies: [
      { component: "Core Language", tech: "Python 3.10+" },
      { component: "Backend Framework", tech: "FastAPI" },
      { component: "Vector Database", tech: "ChromaDB" },
      { component: "Keyword Search", tech: "BM25" },
      { component: "AI Models & LLM", tech: "LLaMA 3 (via GROQ), Hugging Face Embeddings" },
      { component: "Orchestration", tech: "LangChain" }
    ],
    resultsList: [
      "Processed 39 official Ethiopian legal documents (208 MB total corpus)",
      "Created 2,345 semantically organized and indexed chunks",
      "Achieved 71% semantic retrieval accuracy on benchmark legal queries",
      "Robust fallback safeguards completely prevent hallucinations on out-of-scope topics",
      "Generates grammatically correct, culturally resonant Amharic responses"
    ],
    whyItMatters: [
      "First RAG system designed specifically for Ethiopian Amharic law.",
      "Creates direct real-world impact by democratizing legal comprehension for ordinary citizens.",
      "Provides a scalable template adaptable to other Ethiopian languages (Afaan Oromoo, Tigrinya).",
      "Demonstrates that domain-specific AI techniques make modern LLMs highly effective for low-resource languages."
    ],
    whatILearned: [
      "Hybrid retrieval significantly outperforms single-strategy search in formal legal texts.",
      "Unicode handling and tokenization for non-Latin scripts (Ethiopic Fidel) require dedicated normalization pipelines.",
      "In the legal domain, accuracy and citation grounding strictly take precedence over generative fluency.",
      "Production-ready AI systems require dependable graceful failure modes when context is missing."
    ],
    nextSteps: [
      "Expand the vector repository to cover all Ethiopian federal and regional legal codes.",
      "Introduce multilingual support for Afaan Oromoo, Tigrinya, and Somali.",
      "Explore on-premise, quantised local model deployment to eliminate external cloud dependencies.",
      "Expand annotated benchmark datasets in collaboration with legal professionals and law faculties."
    ],
    screenshots: [
      { url: "/projects/rag-legal/signup_modal.png", title: "Authentication & Sign Up Modal", caption: "Ethiopic interface with user registration, login, and secure credentials management." },
      { url: "/projects/rag-legal/chat_welcome.png", title: "Assistant Welcome Interface", caption: "Initial screen guiding citizens on asking legal questions in Amharic." },
      { url: "/projects/rag-legal/chat_answer_citation.png", title: "Legal Query & Source Citation", caption: "System answering a constitutional rights question with verified legal source citations." },
      { url: "/projects/rag-legal/chat_safeguard.png", title: "Hallucination Safeguard Fallback", caption: "Active fallback refusing out-of-scope queries to maintain 100% legal integrity." }
    ]
  },
  {
    id: "amharic-asr-system",
    number: "02",
    shortTitle: "Automatic Speech Recognition System",
    title: "Finetuning Automatic Speech Recognition (ASR) System for Amharic Language",
    category: "Speech Technologies / Deep Learning",
    scope: "Internship Project · Information Network Security Administration (INSA)",
    date: "Dec 2025 – Mar 2026",
    team: "Ayalew Awoke Bitew (Computer Engineering Intern)",
    featuredImage: "/projects/asr-amharic/actual_vs_predicted.png",
    githubUrl: "https://github.com/Ayalew-Awoke",
    stats: [
      { label: "Whisper WER", value: "0.135" },
      { label: "Whisper CER", value: "0.039" },
      { label: "Wav2Vec2 WER", value: "0.153" },
      { label: "Audio Standard", value: "16 kHz WAV" }
    ],
    summary: "Comparative fine-tuning and empirical evaluation of Wav2Vec2 and OpenAI Whisper architectures on a custom Amharic speech dataset for low-resource automatic speech transcription.",
    challenge: "Amharic is spoken by tens of millions of people, yet speech recognition technology for it remains far behind English and other high-resource languages. Existing ASR systems are built and optimized for languages with massive labeled datasets — Amharic has neither the data volume nor the research attention. Add in accent variation, background noise, and Amharic's rich morphology, and most modern ASR models simply fail to produce usable transcriptions.",
    solution: "We fine-tuned two state-of-the-art ASR architectures — Wav2Vec2 and Whisper — on a custom-built Amharic speech dataset, adapting each model's internal representations to Amharic's acoustic and linguistic patterns. Rather than building a model from scratch, we leveraged transfer learning to make pre-trained multilingual/self-supervised models understand Amharic speech accurately.",
    whatIBuilt: [
      {
        title: "Data Pipeline",
        points: [
          "Collected authentic speech from INSA's CAC dataset and YouTube broadcasts (news, interviews, parliamentary recordings)",
          "Built a custom audio cutter to segment long recordings into clean ~30-second clips",
          "Standardized all audio into 16kHz mono WAV format with strictly aligned transcriptions"
        ]
      },
      {
        title: "Audio Preprocessing",
        points: [
          "Noise reduction, amplitude normalization, and silence trimming",
          "Waveform-to-array conversion optimized for model tokenizers and feature extractors",
          "Curated speaker diversity across age, gender, and regional accents"
        ]
      },
      {
        title: "Model Fine-Tuning",
        points: [
          "Wav2Vec2: Fine-tuned with Connectionist Temporal Classification (CTC) loss for audio-to-text alignment",
          "Whisper: Fine-tuned using sequence-to-sequence autoregressive encoder-decoder training",
          "Direct side-by-side training under identical dataset partitions and epoch constraints"
        ]
      },
      {
        title: "Evaluation Framework",
        points: [
          "Automated Word Error Rate (WER) and Character Error Rate (CER) computation with JiWER",
          "Rigorous stress-testing under both clean studio audio and noisy acoustic environments"
        ]
      }
    ],
    howItWorksSteps: [
      { step: "1", title: "Speech Data Collection", desc: "Aggregated broadcast news, interviews, and parliamentary debates from CAC and YouTube." },
      { step: "2", title: "Audio Extraction & Segmentation", desc: "WAV conversion, 16kHz resampling, and 30-second window slicing." },
      { step: "3", title: "Feature Extraction", desc: "Log-mel spectrograms (Whisper) and raw waveform normalization (Wav2Vec2)." },
      { step: "4", title: "Model Fine-Tuning", desc: "PyTorch & HuggingFace training using CTC loss and Seq2Seq cross-entropy loss." },
      { step: "5", title: "Comparative Evaluation", desc: "Benchmarked WER & CER across varying noise levels and speaker profiles." },
      { step: "6", title: "Amharic Transcription", desc: "Delivers faithful, phonetically grounded Ethiopic text transcriptions." }
    ],
    keyInnovation: {
      title: "Dual-Model Comparative Fine-Tuning",
      desc: "Instead of committing to a single architecture, we fine-tuned and evaluated two fundamentally different ASR paradigms side by side: Wav2Vec2 (self-supervised, CTC-based, lightweight) and Whisper (multilingual encoder-decoder, pre-trained on diverse real-world audio). Result: Whisper consistently outperformed Wav2Vec2 on both WER and CER, demonstrating superior noise robustness due to its large-scale multilingual pre-training."
    },
    technologies: [
      { component: "Programming Language", tech: "Python" },
      { component: "Architectures", tech: "OpenAI Whisper, Wav2Vec2 (XLS-R)" },
      { component: "Frameworks", tech: "Hugging Face Transformers, PyTorch, Torchaudio" },
      { component: "Audio Processing", tech: "Librosa, Soundfile" },
      { component: "Evaluation Metrics", tech: "Evaluate, JiWER (WER & CER)" },
      { component: "Data & Visualization", tech: "NumPy, Pandas, Matplotlib, Seaborn" },
      { component: "Environment", tech: "PyCharm, Kaggle GPU Notebooks" }
    ],
    resultsList: [
      "Successfully fine-tuned both Wav2Vec2 and Whisper on the custom Amharic speech corpus",
      "Whisper achieved lower error rates: WER ≈ 0.135, CER ≈ 0.039",
      "Wav2Vec2 achieved: WER ≈ 0.153, CER ≈ 0.058",
      "Whisper exhibited markedly superior resilience against acoustic noise and colloquial inflection",
      "Demonstrated that both architectures generate high-quality Amharic transcriptions even with constrained 10-epoch fine-tuning"
    ],
    whyItMatters: [
      "Provides concrete empirical evidence on architecture selection for researchers in low-resource speech technologies.",
      "Trained on authentic Amharic broadcasts, not artificial or synthetic speech samples.",
      "Lays the computational groundwork for assistive technology, automated subtitles, and voice bots in Ethiopia.",
      "The entire data and fine-tuning pipeline generalizes seamlessly to other Ethiopian languages."
    ],
    whatILearned: [
      "Whisper's large-scale multilingual pre-training gives it an unmistakable edge in noisy acoustic conditions.",
      "Wav2Vec2 is faster and less compute-intensive to fine-tune, but requires cleaner audio and strict data alignment.",
      "Precise audio segmentation and timestamp alignment directly dictate downstream recognition performance.",
      "GPU hardware availability is the defining operational constraint for low-resource ASR experimentation."
    ],
    nextSteps: [
      "Scale training epochs (500+) with dedicated on-premise high-memory GPU clusters.",
      "Expand and diversify the Amharic speech repository with multi-regional accent distributions.",
      "Incorporate advanced data augmentation (SpecAugment, background ambient noise mixing).",
      "Optimize models for real-time edge streaming inference."
    ],
    screenshots: [
      { url: "/projects/asr-amharic/actual_vs_predicted.png", title: "Actual vs. Predicted Evaluation", caption: "Detailed sentence-by-sentence prediction comparison showing individual WER and CER scores." },
      { url: "/projects/asr-amharic/whisper_metrics.png", title: "Whisper Overall Metrics", caption: "Empirical evaluation logs showing Whisper reaching WER of 0.135 and CER of 0.039." },
      { url: "/projects/asr-amharic/wav2vec2_metrics.png", title: "Wav2Vec2 Overall Metrics", caption: "Benchmark test metrics for Wav2Vec2 showing WER of 0.153 and CER of 0.058." },
      { url: "/projects/asr-amharic/audio_predictions.png", title: "Batch Audio Transcriptions", caption: "Predicted Amharic transcriptions across test audio recordings (audio_0014.wav, etc.)." },
      { url: "/projects/asr-amharic/training_progress.png", title: "Training Execution Logs", caption: "PyTorch iteration progress bar and loss convergence monitor." }
    ]
  },
  {
    id: "gondar-ttrs",
    number: "03",
    shortTitle: "Online Tour Ticket Reservation System for Gondar",
    title: "Tour Ticket Reservation System for Gondar",
    category: "Full-Stack Web Engineering / Fintech Integration",
    scope: "Academic Project · Debre Tabor University (Group 1)",
    date: "2025 – 2026",
    team: "Ayalew Awoke Bitew (Group 1), Selomon Adane, Betelihem Matiwos, and Team",
    featuredImage: "/projects/gondar-ttrs/package_list.jpeg",
    githubUrl: "https://github.com/Ayalew-Awoke",
    stats: [
      { label: "Core Modules", value: "7 Modules" },
      { label: "Payment Gateway", value: "Chapa API" },
      { label: "Database", value: "Normalized MySQL" },
      { label: "Architecture", value: "Role-Based (Tourist/Admin)" }
    ],
    summary: "A centralized, web-based reservation platform for historical attractions in Gondar, replacing manual ticketing with digital booking, inventory tracking, and integrated Chapa online payments.",
    challenge: "Gondar is one of Ethiopia's most historically significant cities, home to the UNESCO-listed Fasil Ghebbi (Royal Enclosure). Tourist ticketing was still entirely manual — paper-based sales, registration, and reporting. This led to long queues during peak seasons like Timkat, frequent data-entry errors, lost/damaged records, poor coordination between attraction managers, vendors, and tourism offices, and no visibility into visitor trends or sales data for decision-making. Tourists had no way to book ahead or pay online.",
    solution: "We replaced the manual workflow with a centralized, web-based reservation platform (TTRS). Tourists can browse attractions, book tickets, and pay online in one place; administrators gain full control over inventory, user accounts, and analytical reporting from a single dashboard.",
    whatIBuilt: [
      {
        title: "Tourist Experience",
        points: [
          "Registration, login, and encrypted profile management",
          "Interactive package catalog with detailed attraction descriptions and real-time pricing",
          "Online ticket booking with flexible date selection and visitor counts",
          "Seamless online checkout via the Chapa payment gateway",
          "Personal booking history, digital receipt generation, and feedback submission"
        ]
      },
      {
        title: "Administrative Control Center",
        points: [
          "Centralized attraction and tour package creation, pricing, and scheduling",
          "Live booking confirmation, attendance tracking, and ticket status updates",
          "User account management and role-based permissions",
          "Comprehensive sales reporting, visitor volume analytics, and financial summaries"
        ]
      },
      {
        title: "Payment & Confirmation Engine",
        points: [
          "Direct API integration with Chapa for real-time mobile and card transactions",
          "Automated digital invoice and receipt generation",
          "SMS and email notification triggers on payment confirmation"
        ]
      }
    ],
    howItWorksSteps: [
      { step: "1", title: "Tourist Browsing", desc: "Visitor explores historical attractions like Simien Mountains, Guzara Castle, and Gorgora." },
      { step: "2", title: "Booking Request", desc: "Selects tour date and ticket quantities; Booking Engine validates capacity limits." },
      { step: "3", title: "Chapa Payment Gateway", desc: "Handoff to Chapa API for secure payment processing via test/live banking channels." },
      { step: "4", title: "Transaction Validation", desc: "Webhook callback confirms payment; booking status updates to 'Confirmed'." },
      { step: "5", title: "Receipt & Notifications", desc: "Instant digital receipt issued with unique booking ID; SMS/email confirmation dispatched." },
      { step: "6", title: "Admin Monitoring", desc: "Admins inspect passenger manifests, capacity schedules, and financial revenue charts." }
    ],
    keyInnovation: {
      title: "End-to-End Digital Modernization with National Payment Rails",
      desc: "Rather than building a passive informational website, we engineered a complete transactional platform integrated with Ethiopia's premier fintech gateway (Chapa). The system coordinates role-based access control, normalized relational data models, and automated financial reconciliation to completely replace paper ticketing for historical tourism."
    },
    technologies: [
      { component: "Frontend Layer", tech: "HTML5, CSS3, JavaScript (ES6+), Bootstrap Responsive Grid" },
      { component: "Backend Logic", tech: "PHP (Modular MVC Architecture)" },
      { component: "Database", tech: "MySQL (Tested via XAMPP/Apache)" },
      { component: "Payment Gateway", tech: "Chapa Financial Technologies API" },
      { component: "Modeling & Design", tech: "UML (Use Case, Sequence, Activity, Class Diagrams)" },
      { component: "Security", tech: "Bcrypt password hashing, prepared SQL statements, XSS sanitization" }
    ],
    resultsList: [
      "Successfully automated ticket browsing, reservation, and checkout workflows for Gondar's heritage sites",
      "Equipped administrators with a unified dashboard for inventory, scheduling, and audit reporting",
      "Achieved high reliability during functional testing with responsive rendering across smartphones and desktop browsers",
      "Seamlessly handled real-time payment confirmation and automated receipt generation via Chapa",
      "Proved that an accessible web stack can meaningfully modernize heritage tourism operations"
    ],
    whyItMatters: [
      "Eliminates hours of tourist queuing during major Ethiopian cultural festivals like Timkat.",
      "Guarantees accurate financial accounting and prevents ticket fraud and manual record loss.",
      "Empowers regional tourism authorities with actionable data on visitor trends and peak periods.",
      "Offers international and domestic visitors the modern convenience of pre-booking their cultural tours."
    ],
    whatILearned: [
      "Managing real-time seat/ticket inventory under concurrent user requests requires strict transactional locks.",
      "Webhook payment verification demands robust error-handling for intermittent network connectivity.",
      "Comprehensive UML modeling upfront saved dozens of hours of architectural refactoring during implementation.",
      "Effective agile collaboration with advisors and team members ensures user requirements match actual operations."
    ],
    nextSteps: [
      "Incorporate QR-code ticket scanning at monument entry gates for rapid automated validation.",
      "Implement multi-language support (Amharic, English, French, and German).",
      "Develop cross-platform native iOS/Android companion apps.",
      "Introduce AI-powered predictive tourist surge modeling to recommend optimal pricing."
    ],
    screenshots: [
      { url: "/projects/gondar-ttrs/package_list.jpeg", title: "Traveller Package Catalog", caption: "Catalog showcasing packages including Simien Mountains National Park and Guzara Castle." },
      { url: "/projects/gondar-ttrs/package_details.png", title: "Attraction Detail View", caption: "Detailed package breakdown for Gorgora Lake Tana with itineraries and pricing." },
      { url: "/projects/gondar-ttrs/admin_dashboard.jpeg", title: "Admin Management Dashboard", caption: "System administrator portal for package creation, pricing, and attraction configuration." },
      { url: "/projects/gondar-ttrs/chapa_checkout.jpeg", title: "Chapa Payment Gateway Integration", caption: "Secure payment processing interface supporting test card and bank account channels." },
      { url: "/projects/gondar-ttrs/chapa_receipt.jpeg", title: "Payment Confirmation Receipt", caption: "Verified digital receipt issued upon successful completion of a booking payment." },
      { url: "/projects/gondar-ttrs/use_case_diagram.png", title: "System UML Use Case Diagram", caption: "Architectural blueprint detailing interactions between Tourist and System Admin actors." }
    ]
  },
  {
    id: "rfid-device-tracking",
    number: "04",
    shortTitle: "Electronic Device Tracking System Using RFID",
    title: "Electronic Device Tracking System Using RFID",
    category: "Embedded Systems / Simulation / IoT",
    scope: "Academic Project · Debre Tabor University (Individual Project)",
    date: "2026",
    team: "Ayalew Awoke Bitew (Individual Project)",
    featuredImage: "/projects/rfid-tracking/arduino-uno.svg",
    wokwiUrl: "https://wokwi.com/projects/462032936931169281",
    githubUrl: "https://github.com/Ayalew-Awoke",
    stats: [
      { label: "Microcontroller", value: "Arduino Uno" },
      { label: "RFID Reader", value: "MFRC522 (13.56 MHz)" },
      { label: "Communication", value: "SPI Protocol" },
      { label: "Simulation", value: "Wokwi Environment" }
    ],
    summary: "A hardware-software simulation bridging RFID-based unique tag identification with desktop device management logic for automated tracking of electronic hardware inventory.",
    challenge: "Managing and identifying electronic devices can become complex when information is handled manually. Equipment logs in labs, universities, and offices frequently suffer from missing serial records, unauthorized removal, and inefficient audits. This project explored how RFID technology could be used to create a more organized approach to device identification and tracking, with the complete system represented and evaluated through simulation.",
    solution: "The concept was to design a device-tracking system based on RFID identification, where each electronic device is represented by a unique RFID tag identity. The captured UID is transmitted to a desktop management application, creating a seamless connection between physical hardware identification and digital record tracking.",
    whatIBuilt: [
      {
        title: "Hardware Simulation & Circuit Design",
        points: [
          "Designed complete Arduino Uno circuit interconnected with the MFRC522 RFID reader module",
          "Wired high-speed SPI bus lines: Reset (Pin 9), SS/SDA (Pin 10), MOSI (Pin 11), MISO (Pin 12), SCK (Pin 13)",
          "Simulated live RFID tag detection and UID byte extraction in Wokwi"
        ]
      },
      {
        title: "Firmware Development (C++)",
        points: [
          "Wrote embedded C++ sketch utilizing MFRC522 and SPI libraries",
          "Implemented continuous tag polling, anti-collision handling, and UID parsing",
          "Formatted serial output streams for downstream desktop application consumption"
        ]
      },
      {
        title: "Desktop Application & Tracking Logic",
        points: [
          "Designed data model mapping 4-byte RFID UIDs to device metadata (make, model, assigned lab, custodian)",
          "Established automated check-in / check-out state machines based on sequential tag reads",
          "Structured log reports enabling instant audit verification"
        ]
      }
    ],
    howItWorksSteps: [
      { step: "1", title: "Tag Proximity Detection", desc: "Passive 13.56 MHz RFID tag enters electromagnetic field generated by MFRC522 antenna." },
      { step: "2", title: "UID Acquisition", desc: "Reader initiates anti-collision protocol and acquires unique 4-byte hexadecimal card identifier." },
      { step: "3", title: "SPI Bus Transmission", desc: "MFRC522 pushes raw UID bytes across MOSI/MISO to Arduino Uno digital registers." },
      { step: "4", title: "Firmware Processing", desc: "Arduino sketch parses UID array and serializes data through UART at 9600 baud." },
      { step: "5", title: "Desktop Application Binding", desc: "Management software matches UID against database records to retrieve device profile." },
      { step: "6", title: "State Update & Audit", desc: "Records device status (Available, In-Use, In-Transit) and commits timestamped log entry." }
    ],
    keyInnovation: {
      title: "Rapid Hardware–Software Validation via Full Virtual Simulation",
      desc: "Rather than waiting for physical hardware procurement constraints, I designed, wired, and simulated the complete RFID reader circuit and firmware in the Wokwi simulation cloud. This allowed rapid algorithmic verification of tag collision handling, SPI timing, and serial communications in a fully controlled, inspectable environment."
    },
    technologies: [
      { component: "Microcontroller", tech: "ATmega328P (Arduino Uno)" },
      { component: "RFID Module", tech: "MFRC522 13.56 MHz RFID Transceiver" },
      { component: "Communication Protocol", tech: "SPI (Serial Peripheral Interface) & UART Serial" },
      { component: "Embedded Firmware", tech: "C / C++ (Arduino IDE Framework)" },
      { component: "Simulation Platform", tech: "Wokwi Embedded Systems Simulator" },
      { component: "Tracking Logic", tech: "Desktop Inventory Management Architecture" }
    ],
    resultsList: [
      "Successfully modeled and verified RFID-based identification logic in a complete virtual simulation",
      "Reliably extracted 4-byte tag UIDs and transmitted parsed identifiers over high-speed SPI/Serial",
      "Demonstrated practical device checkout workflows linking physical tags with digital profiles",
      "Provided an accessible, reproducible reference implementation hosted live on Wokwi",
      "Validated the end-to-end viability of RFID tracking before physical hardware fabrication"
    ],
    whyItMatters: [
      "Offers an organized, automated remedy for costly equipment loss in academic institutions and businesses.",
      "Reduces manual audit time from hours to seconds with instantaneous contactless scanning.",
      "Proves how modern simulation environments accelerate hardware-software prototyping without physical parts.",
      "Showcases the seamless integration between physical electronics and higher-level software applications."
    ],
    whatILearned: [
      "Gained deep hands-on mastery of SPI bus arbitration, master-slave pin configuration, and timing clocking.",
      "Understood the operational nuances of RFID anti-collision loops and tag memory structures.",
      "Learned how to decouple physical sensor acquisition from application business logic via clean serial interfaces.",
      "Appreciated the immense value of software simulation for iterative electronic system design."
    ],
    nextSteps: [
      "Fabricate physical PCB prototype with integrated OLED screen and buzzer indicators.",
      "Incorporate ESP32 or Wi-Fi module for direct MQTT cloud database synchronization.",
      "Add active UHF RFID support for long-range room-level automated asset tracking.",
      "Build a web-based responsive management portal with barcode/QR fallback scanning."
    ],
    screenshots: [
      { url: "/projects/rfid-tracking/arduino-uno.svg", title: "Arduino Uno RFID Prototype", caption: "Arduino Uno board used as the microcontroller foundation for the RFID device tracking simulation." }
    ]
  }
];
