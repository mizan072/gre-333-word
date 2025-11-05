
// --- 1. VOCABULARY DATA ---
const vocabList = [
             { "id": 1, "word": "Abate", "bengali": "দূর করা, হ্রাস পাওয়া, কমা, প্রশমিত করা", "english": "subside, or moderate", "mastered": false },
            { "id": 2, "word": "Aberrant", "bengali": "বিচ্যুত, বিপথগামী", "english": "abnormal, or deviant", "mastered": false },
            { "id": 3, "word": "Abeyance", "bengali": "মুলতবি অবস্থা, সাময়িক অক্রিয়তা", "english": "suspended action", "mastered": false },
            { "id": 4, "word": "Abscond", "bengali": "পলাতক হওয়া, আত্মগোপন করিয়া থাকা", "english": "depart secretly and hide", "mastered": false },
            { "id": 5, "word": "Abstemious", "bengali": "সংযমী, মিতাচারী", "english": "sparing in eating and drinking; temperate", "mastered": false },
            { "id": 6, "word": "Admonish", "bengali": "সতর্ক করা, সাবধান করে দেওয়া", "english": "warn; reprove", "mastered": false },
            { "id": 7, "word": "Adulterate", "bengali": "বিশুদ্ধতা নষ্ট করা, ভেজালমিশ্রিত, ব্যভিচা", "english": "make impure by adding inferior or tainted substances", "mastered": false },
            { "id": 8, "word": "Aesthetic", "bengali": "নান্দনিক, সৌন্দর্যবোধ সংক্রান্ত", "english": "artistic; dealing with or capable of appreciating the beautiful", "mastered": false },
            { "id": 9, "word": "Aggregate", "bengali": "সমষ্টিগত, একত্র করা", "english": "gather; accumulate", "mastered": false },
            { "id": 10, "word": "Alacrity", "bengali": "উৎসাহ, সানন্দ, ব্যগ্রতা, উদ্দীপনা", "english": "cheerful promptness; eagerness", "mastered": false },
            { "id": 11, "word": "Alleviate", "bengali": "উপশম, দূর করা", "english": "Relieve", "mastered": false },
            { "id": 12, "word": "Amalgamate", "bengali": "সংযুক্ত করা, সম্মিলিত করা", "english": "combine; unite in one body", "mastered": false },
            { "id": 13, "word": "Ambiguous", "bengali": "অস্পষ্ট, অনিশ্চিত, রহস্যময়", "english": "unclear or doubtful in meaning", "mastered": false },
            { "id": 14, "word": "Ambivalence", "bengali": "বিরোধ, দ্বিমুখিতা, অনিশ্চয়তা", "english": "the state of having contradictory or conflicting emotional attitudes", "mastered": false },
            { "id": 15, "word": "Ameliorate", "bengali": "উন্নত করা, উন্নতি করা, উজ্জর্ষ সাধন করা", "english": "Improve", "mastered": false },
            { "id": 16, "word": "Anachronism", "bengali": "কালব্যতিক্রম, কালবৈষম্য", "english": "something or someone misplaced in time", "mastered": false },
            { "id": 17, "word": "Analogous", "bengali": "অনুরূপ, তুলনীয়", "english": "Comparable", "mastered": false },
            { "id": 18, "word": "Anarchy", "bengali": "নৈরাজ্য, অরাজকতা, বিশৃঙ্খলা", "english": "absence of governing body; state of disorder", "mastered": false },
            { "id": 19, "word": "Anomalous", "bengali": "ব্যতিক্রমী, অস্বাভাবিক", "english": "abnormal; irregular", "mastered": false },
            { "id": 20, "word": "Antipathy", "bengali": "বিরোধিতা, বিদ্বেষ", "english": "aversion; dislike", "mastered": false },
            { "id": 21, "word": "Apathy", "bengali": "উদাসীনতা, অরূচি", "english": "lack of caring; indifference", "mastered": false },
            { "id": 22, "word": "Appease", "bengali": "রশমিত করা, খুশি করা", "english": "pacify or soothe; relieve", "mastered": false },
            { "id": 23, "word": "Apprise", "bengali": "জ্ঞাপন করা", "english": "Inform", "mastered": false },
            { "id": 24, "word": "Approbation", "bengali": "অনুমোদন", "english": "Approval", "mastered": false },
            { "id": 25, "word": "Appropriate", "bengali": "উপযুক্ত, যথাযথ", "english": "acquire; take possession of for one's own use", "mastered": false },
            { "id": 26, "word": "Arduous", "bengali": "শ্রমসাধ্য, কষ্টসাধ্য", "english": "hard; strenuous", "mastered": false },
            { "id": 27, "word": "Artless", "bengali": "সরল, কৌশলহীন", "english": "without guile; open and honest", "mastered": false },
            { "id": 28, "word": "Ascetic", "bengali": "সাধু, যোগী", "english": "practicing self-denial; austere", "mastered": false },
            { "id": 29, "word": "Assiduous", "bengali": "উদ্যোগী, পরিশ্রমী", "english": "Diligent", "mastered": false },
            { "id": 30, "word": "Assuage", "bengali": "উপশম করা, হ্রাস করা", "english": "ease or lessen (pain); satisfy (hunger); soothe (anger)", "mastered": false },
            { "id": 31, "word": "Attenuate", "bengali": "কাহিল, মূল্য কমান", "english": "make thinner", "mastered": false },
            { "id": 32, "word": "Audacious", "bengali": "দুঃসাহসী, উদ্ধত", "english": "daring; bold", "mastered": false },
            { "id": 33, "word": "Austere", "bengali": "কঠোর, কঠোর আত্মসংযমী", "english": "forbiddingly stern; severely simple and unornamented", "mastered": false },
            { "id": 34, "word": "Autonomous", "bengali": "স্বায়ত্বশাসিত, স্বশাসিত", "english": "self-governing; independent", "mastered": false },
            { "id": 35, "word": "Aver", "bengali": "আছে", "english": "assert confidently or declare; as used in law, state formally as a fact", "mastered": false },
            { "id": 36, "word": "Banal", "bengali": "গতানুগতিক, মামুলি", "english": "hackneyed; commonplace; trite; lacking originality", "mastered": false },
            { "id": 37, "word": "Belie", "bengali": "মিথ্যা ধারণা জন্মান, প্রমাণ করিতে অমর্থন হওযা", "english": "contradict; give a false impression", "mastered": false },
            { "id": 38, "word": "Beneficent", "bengali": "দয়ালু, দানশীল", "english": "kindly; doing good", "mastered": false },
            { "id": 39, "word": "Bolster", "bengali": "কোলবালিশ, ঠেস দেওয়ান", "english": "support; reinforce", "mastered": false },
            { "id": 40, "word": "Bombastic", "bengali": "শব্দাড়ম্বরপূর্ণ, অত্যধিক জমকালো", "english": "pompous; using inflated language", "mastered": false },
            { "id": 41, "word": "Boorish", "bengali": "বর্বর, গেঁয়ো", "english": "rude; insensitive", "mastered": false },
            { "id": 42, "word": "Burgeon", "bengali": "পাতা ধরা, মুকুল", "english": "grow forth; send out buds", "mastered": false },
            { "id": 43, "word": "Burnish", "bengali": "পালিশ করা, চাকচক্য", "english": "make shiny by rubbing; polish", "mastered": false },
            { "id": 44, "word": "Buttress", "bengali": "ঠেকনো, শক্তিশালী করা", "english": "support; prop up", "mastered": false },
            { "id": 45, "word": "Capricious", "bengali": "খামখেয়ালী, অনিয়মিত", "english": "unpredictable; fickle", "mastered": false },
            { "id": 46, "word": "Castigation", "bengali": "কঠোর সমালোচনা, শাস্তি", "english": "punishment; severe criticism", "mastered": false },
            { "id": 47, "word": "Catalyst", "bengali": "অনুঘটক", "english": "agent that increases the pace of a chemical action", "mastered": false },
            { "id": 48, "word": "Caustic", "bengali": "দগ্ধকারক পদার্থ, দাহক", "english": "burning; sarcastically biting", "mastered": false },
            { "id": 49, "word": "Chicanery", "bengali": "প্রতারণা, ছল", "english": "trickery; deception", "mastered": false },
            { "id": 50, "word": "Coagulate", "bengali": "জমাট বাঁধা, ঘনীভূত হওয়া", "english": "thicken; congeal; clot", "mastered": false },
            { "id": 51, "word": "Coda", "bengali": "সংক্ষিপ্ত করা", "english": "concluding section of a musical or literary composition; summarizes or concludes", "mastered": false },
            { "id": 52, "word": "Cogent", "bengali": "প্রবল, জোরালো", "english": "convincing", "mastered": false },
            { "id": 53, "word": "Commensurate", "bengali": "আনুপাতিক", "english": "corresponding in extent, degree, etc.; proportionate", "mastered": false },
            { "id": 54, "word": "Compendium", "bengali": "সারসংক্ষেপ", "english": "brief, comprehensive summary", "mastered": false },
            { "id": 55, "word": "Complaisant", "bengali": "প্রদায়ক, পরোপকারী", "english": "trying to please; overly polite; obliging", "mastered": false },
            { "id": 56, "word": "Compliant", "bengali": "সঙ্গতিশীল, বিনয়ী", "english": "yielding; conforming to requirements", "mastered": false },
            { "id": 57, "word": "Conciliatory", "bengali": "বন্ধুত্বপূর্ণ", "english": "reconciling; soothing", "mastered": false },
            { "id": 58, "word": "Condone", "bengali": "ক্ষমা করা, মকוב করা", "english": "overlook; forgive; give tacit approval; excuse", "mastered": false },
            { "id": 59, "word": "Confound", "bengali": "ভুল করা", "english": "confuse; puzzle", "mastered": false },
            { "id": 60, "word": "Connoisseur", "bengali": "রসপণ্ডিত, শিল্পকলা প্রভৃতির সমঝদার", "english": "person competent to act as a judge of art; a lover of art", "mastered": false },
            { "id": 61, "word": "Contention", "bengali": "বিবাদ, যুক্তি", "english": "claim; thesis", "mastered": false },
            { "id": 62, "word": "Contentious", "bengali": "কুস্বভাব", "english": "quarrelsome", "mastered": false },
            { "id": 63, "word": "Contrite", "bengali": "অনুতপ্ত", "english": "penitent", "mastered": false },
            { "id": 64, "word": "Conundrum", "bengali": "হেঁয়ালি", "english": "riddle; difficult problem", "mastered": false },
            { "id": 65, "word": "Converge", "bengali": "একই বিন্দুতে মিলিত হওয়া", "english": "approach; tend to meet; come together", "mastered": false },
            { "id": 66, "word": "Convoluted", "bengali": "বাঁকানো, জটিল", "english": "coiled around; involved; intricate", "mastered": false },
            { "id": 67, "word": "Craven", "bengali": "কাপুরুষ", "english": "cowardly", "mastered": false },
            { "id": 68, "word": "Daunt", "bengali": "ভয় দেখানো", "english": "intimidate; frighten", "mastered": false },
            { "id": 69, "word": "Decorum", "bengali": "ভদ্রতা", "english": "propriety; orderliness and good taste in manners", "mastered": false },
            { "id": 70, "word": "Default", "bengali": "অনুপস্থিতি", "english": "failure to act", "mastered": false },
            { "id": 71, "word": "Deference", "bengali": "মানিয়া লওয়া", "english": "courteous regard for another's wishes", "mastered": false },
            { "id": 72, "word": "Delineate", "bengali": "বর্ণনা করা", "english": "portray; depict; sketch", "mastered": false },
            { "id": 73, "word": "Denigrate", "bengali": "কলঙ্কিত করা, হেয় করা", "english": "blacken", "mastered": false },
            { "id": 74, "word": "Deride", "bengali": "উপহাস করা, বিদ্রূপ করা", "english": "ridicule; make fun of", "mastered": false },
            { "id": 75, "word": "Derivative", "bengali": "শিক্ষাদীক্ষিক", "english": "unoriginal; obtained from another source", "mastered": false },
            { "id": 76, "word": "Desiccate", "bengali": "শুষ্ক করা, শুকান", "english": "dry up", "mastered": false },
            { "id": 77, "word": "Desultory", "bengali": "এলোমেলো", "english": "aimless; haphazard; digressing at random", "mastered": false },
            { "id": 78, "word": "Deterrent", "bengali": "প্রতিবন্ধক", "english": "Something that discourages; hindrance", "mastered": false },
            { "id": 79, "word": "Diatribe", "bengali": "সুদীর্ঘ আলোচণা", "english": "bitter scolding; invective", "mastered": false },
            { "id": 80, "word": "Dichotomy", "bengali": "বৈপরীত্য, দ্বিবিভাজন", "english": "split; branching into two parts (especially contradictory ones)", "mastered": false },
            { "id": 81, "word": "Diffidence", "bengali": "অবিশ্বাস", "english": "Shyness", "mastered": false },
            { "id": 82, "word": "Diffuse", "bengali": "মেলা", "english": "wordy, rambling, spread out (like a gas)", "mastered": false },
            { "id": 83, "word": "Digression", "bengali": "অবান্তরতা", "english": "Wandering away from the subject", "mastered": false },
            { "id": 84, "word": "Dirge", "bengali": "গান, অন্ত্যোষ্টিগাথা", "english": "Lament with music", "mastered": false },
            { "id": 85, "word": "Disabuse", "bengali": "ভুল ধারণা বা মোহ থেকে মুক্ত করা", "english": "correct a false impression; undeceive", "mastered": false },
            { "id": 86, "word": "Discerning", "bengali": "নির্ণায়ক", "english": "mentally quick and observant; having insight", "mastered": false },
            { "id": 87, "word": "Discordant", "bengali": "বিসদৃশ", "english": "not harmonious; conflicting", "mastered": false },
            { "id": 88, "word": "Discredit", "bengali": "সুনামহানি, কল", "english": "defame; destroy confidence in; disbelieve", "mastered": false },
            { "id": 89, "word": "Discrepancy", "bengali": "অমিল", "english": "lack of consistency; difference", "mastered": false },
            { "id": 90, "word": "Discrete", "bengali": "স্বতন্ত্র", "english": "separate; unconnected; consisting of distinct parts", "mastered": false },
            { "id": 91, "word": "Disingenuous", "bengali": "অন্ত: সারশূণ্য", "english": "lacking genuine candor; insincere", "mastered": false },
            { "id": 92, "word": "Disinterested", "bengali": "অনিচ্ছুক", "english": "Unprejudiced", "mastered": false },
            { "id": 93, "word": "Disjointed", "bengali": "টুকরা টুকরা", "english": "lacking coherence; separated at the joints", "mastered": false },
            { "id": 94, "word": "Dismiss", "bengali": "খারিজ, বাদ দেওয়া", "english": "eliminate from consideration; reject", "mastered": false },
            { "id": 95, "word": "Disparage", "bengali": "অবজ্ঞা করা", "english": "Belittle", "mastered": false },
            { "id": 96, "word": "Disparate", "bengali": "অসম", "english": "basically different; unrelated", "mastered": false },
            { "id": 97, "word": "Dissemble", "bengali": "গোপন রাখা", "english": "disguise; pretend", "mastered": false },
            { "id": 98, "word": "Disseminate", "bengali": "প্রচার করা", "english": "distribute; spread; scatter (like seeds)", "mastered": false },
            { "id": 99, "word": "Dissolution", "bengali": "শিথিলীকরণ", "english": "disintegration; looseness in morals", "mastered": false },
            { "id": 100, "word": "Dissonance", "bengali": "অনৈক্য", "english": "discord; opposite of harmony", "mastered": false },
            { "id": 101, "word": "Distend", "bengali": "ফাঁপা", "english": "expand; swell out", "mastered": false },
            { "id": 102, "word": "Distill", "bengali": "পাতন করা, বিশুদ্ধ করা", "english": "purify; refine; concentrate", "mastered": false },
            { "id": 103, "word": "Diverge", "bengali": "বিপথগামী হওযা", "english": "vary; go in different directions from the same point", "mastered": false },
            { "id": 104, "word": "Divest", "bengali": "পরিত্যাগ করা", "english": "strip; deprive", "mastered": false },
            { "id": 105, "word": "Document", "bengali": "দলিল, নথিপত্র", "english": "provide written evidence", "mastered": false },
            { "id": 106, "word": "Dogmatic", "bengali": "উদ্ধত", "english": "opinionated; arbitrary; doctrinal", "mastered": false },
            { "id": 107, "word": "Dormant", "bengali": "সপ্ত", "english": "sleeping; lethargic; latent", "mastered": false },
            { "id": 108, "word": "Dupe", "bengali": "প্রতারণা করা", "english": "someone easily fooled", "mastered": false },
            { "id": 109, "word": "Ebullient", "bengali": "উত্তেজিত", "english": "showing excitement; overflowing with enthusiasm", "mastered": false },
            { "id": 110, "word": "Eclectic", "bengali": "সারগ্রাহী", "english": "selective; composed of elements drawn from disparate sources", "mastered": false },
            { "id": 111, "word": "Efficacy", "bengali": "ফলপ্রসূতা, কার্যক্ষমতা", "english": "power to produce desired effect", "mastered": false },
            { "id": 112, "word": "Effrontery", "bengali": "বেহায়াপনা", "english": "impudence; shameless boldness; sheer nerve; presumptuousness", "mastered": false },
            { "id": 113, "word": "Elegy", "bengali": "শোকসঙ্গীত", "english": "poem or song expressing lamentation", "mastered": false },
            { "id": 114, "word": "Elicit", "bengali": "প্রকাশ করা", "english": "draw out by discussion", "mastered": false },
            { "id": 115, "word": "Embellish", "bengali": "সুশোভিত করা", "english": "adorn; ornament; enhance, as a story", "mastered": false },
            { "id": 116, "word": "Empirical", "bengali": "গবেষণামূলক", "english": "based on experience", "mastered": false },
            { "id": 117, "word": "Emulate", "bengali": "অনুকরণ", "english": "imitate; rival", "mastered": false },
            { "id": 118, "word": "Endemic", "bengali": "সমকক্ষ হইতে বা ছাপাইয়া যাইতে চেষ্ঠা", "english": "prevailing among a specific group of people or in a specific area or country", "mastered": false },
            { "id": 119, "word": "Enervate", "bengali": "দুর্বল করা", "english": "Weaken", "mastered": false },
            { "id": 120, "word": "Engender", "bengali": "প্রসব করা, জন্ম দেওয়া", "english": "cause; produce", "mastered": false },
            { "id": 121, "word": "Enhance", "bengali": "উন্নত করা", "english": "increase; improve", "mastered": false },
            { "id": 122, "word": "Ephemeral", "bengali": "অল্পক্ষণস্থায়ী", "english": "short-lived; fleeting", "mastered": false },
            { "id": 123, "word": "Equanimity", "bengali": "মনের বা মেজাজের সমতা অথবা", "english": "calmness of temperament; composure", "mastered": false },
            { "id": 124, "word": "Equivocate", "bengali": "দ্ব্যর্থবোধক বাক্য ব্যবহার করা", "english": "lie; mislead; attempt to conceal the truth", "mastered": false },
            { "id": 125, "word": "Erudite", "bengali": "পাণ্ডিতাপূর্ণ", "english": "learned; scholarly", "mastered": false },
            { "id": 126, "word": "Esoteric", "bengali": "লুকনো", "english": "hard to understand; known only to the chosen few", "mastered": false },
            { "id": 127, "word": "Eulogy", "bengali": "প্রশংসা", "english": "expression of praise, often on the occasion of someone's death", "mastered": false },
            { "id": 128, "word": "Euphemism", "bengali": "শ্রুতিকটু পদের পরিবর্তে কোমলতর", "english": "mild expression in place of an unpleasant one", "mastered": false },
            { "id": 129, "word": "Exacerbate", "bengali": "বিরক্ত করা", "english": "worsen; embitter", "mastered": false },
            { "id": 130, "word": "Exculpate", "bengali": "দোষক্ষালন করা", "english": "clear from blame", "mastered": false },
            { "id": 131, "word": "Exigency", "bengali": "জরুরি অবস্থা", "english": "urgent situation; pressing needs or demands; state of requiring immediate attention", "mastered": false },
            { "id": 132, "word": "Extrapolation", "bengali": "বহির্পাতন", "english": "projection; conjecture", "mastered": false },
            { "id": 133, "word": "Facetious", "bengali": "মজা-করা", "english": "joking (often inappropriately); humorous", "mastered": false },
            { "id": 134, "word": "Facilitate", "bengali": "সহজসাধ্য করে তোলা", "english": "help bring about; make less difficult", "mastered": false },
            { "id": 135, "word": "Fallacious", "bengali": "ভ্রান্ত", "english": "false; misleading", "mastered": false },
            { "id": 136, "word": "Fatuous", "bengali": "নির্বোধ, উদ্দেশ্যহীন", "english": "brainless; inane; foolish, yet smug", "mastered": false },
            { "id": 137, "word": "Fawning", "bengali": "চাটুকার", "english": "trying to please by behaving obsequiously, flattering, or cringing", "mastered": false },
            { "id": 138, "word": "Felicitous", "bengali": "নিখুঁত", "english": "apt; suitably expressed; well chosen", "mastered": false },
            { "id": 139, "word": "Fervor", "bengali": "উৎসাহ", "english": "glowing ardor; intensity of feeling", "mastered": false },
            { "id": 140, "word": "Flag", "bengali": "পতাকা", "english": "droop; grow feeble", "mastered": false },
            { "id": 141, "word": "Fledgling", "bengali": "জাতপক্ষ", "english": "inexperienced", "mastered": false },
            { "id": 142, "word": "Flout", "bengali": "উড়িয়ে দেওয়া", "english": "reject; mock; show contempt for", "mastered": false },
            { "id": 143, "word": "Foment", "bengali": "লালন করা", "english": "stir up; instigate", "mastered": false },
            { "id": 144, "word": "Forestall", "bengali": "কিছু আগে করা", "english": "prevent by taking action in advance", "mastered": false },
            { "id": 145, "word": "Frugality", "bengali": "সংযম", "english": "thrift; economy", "mastered": false },
            { "id": 146, "word": "Futile", "bengali": "অকার্যকর", "english": "useless; hopeless; ineffectual", "mastered": false },
            { "id": 147, "word": "Gainsay", "bengali": "প্রতিবাদ করা", "english": "deny", "mastered": false },
            { "id": 148, "word": "Garrulous", "bengali": "বাচাল", "english": "loquacious; talkative; wordy", "mastered": false },
            { "id": 149, "word": "Goad", "bengali": "উদ্দীপনা", "english": "urge on", "mastered": false },
            { "id": 150, "word": "Gouge", "bengali": "প্রতারণা", "english": "overcharge", "mastered": false },
            { "id": 151, "word": "Grandiloquent", "bengali": "জমকাল", "english": "pompous; bombastic; using high-sounding language", "mastered": false },
            { "id": 152, "word": "Gregarious", "bengali": "দলপ্রিয়, সঙ্গলিঙ্গু", "english": "sociable", "mastered": false },
            { "id": 153, "word": "Guileless", "bengali": "সরল", "english": "without deceit", "mastered": false },
            { "id": 154, "word": "Gullible", "bengali": "অতিসরল", "english": "easily deceived", "mastered": false },
            { "id": 155, "word": "Harangue", "bengali": "বাগাড়ম্বরপূর্ণ বক্তৃতা", "english": "long, passionate, and vehement speech", "mastered": false },
            { "id": 156, "word": "Homogeneous", "bengali": "সমজাতিক", "english": "of the same kind", "mastered": false },
            { "id": 157, "word": "Hyperbole", "bengali": "অতিশযোকি", "english": "exaggeration; overstatement", "mastered": false },
            { "id": 158, "word": "Iconoclastic", "bengali": "কালাপাহাড়ী", "english": "attacking cherished traditions", "mastered": false },
            { "id": 159, "word": "Idolatry", "bengali": "মূর্তিপূজা, অত্যধিক শ্রদ্ধা", "english": "worship of idols; excessive admiration", "mastered": false },
            { "id": 160, "word": "Immutable", "bengali": "অপরিবর্তনীয়", "english": "unchangeable", "mastered": false },
            { "id": 161, "word": "Impair", "bengali": "দুর্বল করা", "english": "injure; hurt", "mastered": false },
            { "id": 162, "word": "Impassive", "bengali": "অনড", "english": "without feeling; imperturbable; stoical", "mastered": false },
            { "id": 163, "word": "Impede", "bengali": "বাধা দেওয়া", "english": "hinder; block", "mastered": false },
            { "id": 164, "word": "Impermeable", "bengali": "জলরোধী", "english": "impervious; not permitting passage through its substance", "mastered": false },
            { "id": 165, "word": "Imperturbable", "bengali": "শান্ত", "english": "calm; placid", "mastered": false },
            { "id": 166, "word": "Impervious", "bengali": "অভেদ্য, অসংবেদী", "english": "impenetrable; incapable of being damaged or distressed", "mastered": false },
            { "id": 167, "word": "Implacable", "bengali": "নিষ্ঠুর", "english": "incapable of being pacified", "mastered": false },
            { "id": 168, "word": "Implicit", "bengali": "অন্তর্নিহিত", "english": "understood but not stated", "mastered": false },
            { "id": 169, "word": "Implode", "bengali": "কেন্দ্রীভূত করা", "english": "burst inward", "mastered": false },
            { "id": 170, "word": "Inadvertently", "bengali": "অনবধানতাবশত", "english": "unintentionally; by oversight; carelessly", "mastered": false },
            { "id": 171, "word": "Inchoate", "bengali": "অপরিণত", "english": "recently begun; rudimentary; elementary", "mastered": false },
            { "id": 172, "word": "Incongruity", "bengali": "অনৈক্য", "english": "lack of harmony; absurdity", "mastered": false },
            { "id": 173, "word": "Inconsequential", "bengali": "তুচ্ছ", "english": "insignificant; unimportant", "mastered": false },
            { "id": 174, "word": "Incorporate", "bengali": "বিদেহী", "english": "introduce something into a larger whole; combine; unite", "mastered": false },
            { "id": 175, "word": "Indeterminate", "bengali": "অনির্দিষ্ট", "english": "uncertain; not clearly fixed; indefinite", "mastered": false },
            { "id": 176, "word": "Indigence", "bengali": "দারিদ্র্য", "english": "Poverty", "mastered": false },
            { "id": 177, "word": "Indolent", "bengali": "কুড়ে, অলস", "english": "Lazy", "mastered": false },
            { "id": 178, "word": "Inert", "bengali": "অলস", "english": "inactive; lacking power to move", "mastered": false },
            { "id": 179, "word": "Ingenuous", "bengali": "অকপট", "english": "naive and trusting; young; unsophisticated", "mastered": false },
            { "id": 180, "word": "Inherent", "bengali": "সহজাত", "english": "firmly established by nature or habit", "mastered": false },
            { "id": 181, "word": "Innocuous", "bengali": "নির্দোষ", "english": "Harmless", "mastered": false },
            { "id": 182, "word": "Insensible", "bengali": "নির্বিকার", "english": "unconscious; unresponsive", "mastered": false },
            { "id": 183, "word": "Insinuate", "bengali": "কটাক্ষ করা", "english": "hint; imply; creep in", "mastered": false },
            { "id": 184, "word": "Insipid", "bengali": "স্বাদহীন, পানসে", "english": "lacking in flavor; dull", "mastered": false },
            { "id": 185, "word": "Insularity", "bengali": "সংকীর্ণচিত্ততা", "english": "narrow-mindedness; isolation", "mastered": false },
            { "id": 186, "word": "Intractable", "bengali": "অবাধ্য", "english": "unruly; stubborn; unyielding", "mastered": false },
            { "id": 187, "word": "Intransigence", "bengali": "জেদীতা", "english": "refusal of any compromise; stubbornness", "mastered": false },
            { "id": 188, "word": "Inundate", "bengali": "নিমজ্জিত করা", "english": "overwhelm; flood; submerge", "mastered": false },
            { "id": 189, "word": "Inured", "bengali": "অভ্যন্ত", "english": "accustomed; hardened", "mastered": false },
            { "id": 190, "word": "Invective", "bengali": "আক্রমণমূলক, কটুকি", "english": "Abuse", "mastered": false },
            { "id": 191, "word": "Irascible", "bengali": "খিটখিটে", "english": "irritable; easily angered", "mastered": false },
            { "id": 192, "word": "Irresolute", "bengali": "চঞ্চলমতি", "english": "uncertain how to act; weak", "mastered": false },
            { "id": 193, "word": "Itinerary", "bengali": "ভ্রমণপথ", "english": "plan of a trip", "mastered": false },
            { "id": 194, "word": "Laconic", "bengali": "মিতবাক", "english": "brief and to the point", "mastered": false },
            { "id": 195, "word": "Lassitude", "bengali": "শ্রান্তি", "english": "languor; weariness", "mastered": false },
            { "id": 196, "word": "Latent", "bengali": "অন্তর্নিহিত", "english": "potential but undeveloped; dormant; hidden", "mastered": false },
            { "id": 197, "word": "Laud", "bengali": "গুণকীর্তন", "english": "Praise", "mastered": false },
            { "id": 198, "word": "Lethargic", "bengali": "অলস", "english": "drowsy; dull", "mastered": false },
            { "id": 199, "word": "Levee", "bengali": "নদীতীরের বাঁধ, নদীর উঁচু পাড়, বাঁধ", "english": "stone embankment to prevent flooding", "mastered": false },
            { "id": 200, "word": "Levity", "bengali": "ছ্যাবলামি", "english": "lack of seriousness or steadiness; frivolity", "mastered": false },
            { "id": 201, "word": "Log", "bengali": "বাধা", "english": "record of a voyage or flight; record of day-to-day activities", "mastered": false },
            { "id": 202, "word": "Loquacious", "bengali": "বহুভাষী", "english": "Talkative", "mastered": false },
            { "id": 203, "word": "Lucid", "bengali": "পরিষ্কার", "english": "easily understood; clear; intelligible", "mastered": false },
            { "id": 204, "word": "Luminous", "bengali": "উজ্জ্বল", "english": "shining; issuing light", "mastered": false },
            { "id": 205, "word": "Magnanimity", "bengali": "মহানুভবতা, মহত্ত", "english": "Generosity", "mastered": false },
            { "id": 206, "word": "Malingerer", "bengali": "রোগভানকারী", "english": "one who feigns illness to escape duty", "mastered": false },
            { "id": 207, "word": "Malleable", "bengali": "ঘাতসহ", "english": "capable of being shaped by pounding; impressionable", "mastered": false },
            { "id": 208, "word": "Maverick", "bengali": "বাউন্ডুলে", "english": "rebel; nonconformist", "mastered": false },
            { "id": 209, "word": "Mendacious", "bengali": "মিথ্যাবাদী", "english": "lying; habitually dishonest", "mastered": false },
            { "id": 210, "word": "Metamorphosis", "bengali": "রুপান্তর", "english": "change of form", "mastered": false },
            { "id": 211, "word": "Meticulous", "bengali": "অতিসতর্ক", "english": "excessively careful; painstaking; scrupulous", "mastered": false },
            { "id": 212, "word": "Misanthrope", "bengali": "মানুষ্যবিদ্বেষী", "english": "one who hates mankind", "mastered": false },
            { "id": 213, "word": "Mitigate", "bengali": "উপশম করা, রশমিত করা", "english": "appease; moderate", "mastered": false },
            { "id": 214, "word": "Mollify", "bengali": "শান্ত করা", "english": "Soothe", "mastered": false },
            { "id": 215, "word": "Morose", "bengali": "অন্ধকারাচ্ছন", "english": "ill-humored; sullen; melancholy", "mastered": false },
            { "id": 216, "word": "Mundane", "bengali": "জাগতিক", "english": "worldly as opposed to spiritual; everyday", "mastered": false },
            { "id": 217, "word": "Negate", "bengali": "অস্বীকার করা", "english": "cancel out; nullify; deny", "mastered": false },
            { "id": 218, "word": "Neophyte", "bengali": "নবদীক্ষিত ব্যক্তি", "english": "recent convert; beginner", "mastered": false },
            { "id": 219, "word": "Obdurate", "bengali": "একগুঁয়ে", "english": "stubborn", "mastered": false },
            { "id": 220, "word": "Obsequious", "bengali": "চাটুকার", "english": "lavishly attentive; servile; sycophantic", "mastered": false },
            { "id": 221, "word": "Obviate", "bengali": "দূর করা", "english": "make unnecessary; get rid of", "mastered": false },
            { "id": 222, "word": "Occlude", "bengali": "বন্ধ করে দেওয়া", "english": "shut; close", "mastered": false },
            { "id": 223, "word": "Officious", "bengali": "অনধিকার", "english": "meddlesome; excessively pushy in offering one's services", "mastered": false },
            { "id": 224, "word": "Onerous", "bengali": "গুরুভার", "english": "burdensome", "mastered": false },
            { "id": 225, "word": "Opprobrium", "bengali": "নিন্দা", "english": "infamy; vilification", "mastered": false },
            { "id": 226, "word": "Oscillate", "bengali": "স্পন্দিত হওয়া, দোদুল্যমান হওয়া", "english": "vibrate; waver", "mastered": false },
            { "id": 227, "word": "Ostentatious", "bengali": "জাঁকালো", "english": "showy; pretentious; trying to attract attention", "mastered": false },
            { "id": 228, "word": "Paragon", "bengali": "সম্পূর্ণতার আদর্শ", "english": "model of perfection", "mastered": false },
            { "id": 229, "word": "Partisan", "bengali": "দলীয়", "english": "one-sided; prejudiced; committed to a party", "mastered": false },
            { "id": 230, "word": "Pathological", "bengali": "আবেগপূর্ণ", "english": "pertaining to disease", "mastered": false },
            { "id": 231, "word": "Paucity", "bengali": "অভাব, ঘাটতি", "english": "Scarcity", "mastered": false },
            { "id": 232, "word": "Pedantic", "bengali": "গোঁড়া, স্কুল-শিক্ষকসুলভ", "english": "showing off learning; bookish", "mastered": false },
            { "id": 233, "word": "Penchant", "bengali": "পছন্দ", "english": "strong inclination; liking", "mastered": false },
            { "id": 234, "word": "Penury", "bengali": "স্বল্পতা", "english": "severe poverty; stinginess", "mastered": false },
            { "id": 235, "word": "Perennial", "bengali": "বহুবর্ষজীবী", "english": "something long-lasting", "mastered": false },
            { "id": 236, "word": "Perfidious", "bengali": "অবিশ্বাসী", "english": "treacherous; disloyal", "mastered": false },
            { "id": 237, "word": "Perfunctory", "bengali": "দ্রুতসম্পাদিত, অগভীর", "english": "superficial; not thorough; lacking interest, care, or enthusiasm", "mastered": false },
            { "id": 238, "word": "Permeable", "bengali": "ভেদ্য", "english": "penetrable; porous; allowing liquids or gas to pass through", "mastered": false },
            { "id": 239, "word": "Pervasive", "bengali": "পরিব্যাপক", "english": "spread throughout", "mastered": false },
            { "id": 240, "word": "Phlegmatic", "bengali": "জড", "english": "calm; not easily disturbed", "mastered": false },
            { "id": 241, "word": "Piety", "bengali": "ভক্তি", "english": "devoutness; reverence for God", "mastered": false },
            { "id": 242, "word": "Placate", "bengali": "শান্ত করা", "english": "pacify; conciliate", "mastered": false },
            { "id": 243, "word": "Plasticity", "bengali": "নমনীয়তা", "english": "ability to be molded", "mastered": false },
            { "id": 244, "word": "Platitude", "bengali": "মামুলি মন্তব্য", "english": "trite remark; commonplace statement", "mastered": false },
            { "id": 245, "word": "Plethora", "bengali": "আধিক্য", "english": "excess; overabundance", "mastered": false },
            { "id": 246, "word": "Plummet", "bengali": "ওলনদড়ি", "english": "fall sharply", "mastered": false },
            { "id": 247, "word": "Porous", "bengali": "ঝাঁজরা", "english": "full of pores; like a sieve", "mastered": false },
            { "id": 248, "word": "Pragmatic", "bengali": "রাষ্ট্রীয়", "english": "practical (as opposed to idealistic); concerned with the practical worth or impact of something", "mastered": false },
            { "id": 249, "word": "Preamble", "bengali": "প্রস্তাবনা", "english": "introductory statement", "mastered": false },
            { "id": 250, "word": "Precarious", "bengali": "নিরাপত্তাহীন", "english": "uncertain; risky", "mastered": false },
            { "id": 251, "word": "Precipitate", "bengali": "থিতান", "english": "rash, premature, hasty, sudden", "mastered": false },
            { "id": 252, "word": "Precursor", "bengali": "অগ্রদূত, ঘটনার পূর্বাভাস", "english": "forerunner", "mastered": false },
            { "id": 253, "word": "Presumptuous", "bengali": "অহংকারী", "english": "arrogant; taking liberties", "mastered": false },
            { "id": 254, "word": "Prevaricate", "bengali": "সত্যের অপলাপ করা", "english": "lie", "mastered": false },
            { "id": 255, "word": "Pristine", "bengali": "আদিম", "english": "characteristic of earlier times; primitive; unspoiled", "mastered": false },
            { "id": 256, "word": "Probity", "bengali": "সততা, ন্যায়পরতা", "english": "uprightness; incorruptibility", "mastered": false },
            { "id": 257, "word": "Problematic", "bengali": "সমস্যাযুক", "english": "doubtful; unsettled; questionable; perplexing", "mastered": false },
            { "id": 258, "word": "Prodigal", "bengali": "অপব্যযী", "english": "wasteful; reckless with money", "mastered": false },
            { "id": 259, "word": "Profound", "bengali": "গভীর", "english": "deep; not superficial; complete", "mastered": false },
            { "id": 260, "word": "Prohibitive", "bengali": "প্রতিষেধক", "english": "tending to prevent the purchase or use of something; inclined to prevent or forbid", "mastered": false },
            { "id": 261, "word": "Proliferate", "bengali": "প্রচুর সংখ্যায় স্বীয় বংশবৃদ্ধি করা", "english": "grow rapidly; spread; multiply", "mastered": false },
            { "id": 262, "word": "Propensity", "bengali": "প্রবণতা", "english": "natural inclination", "mastered": false },
            { "id": 263, "word": "Propitiate", "bengali": "শান্ত করা", "english": "Appease", "mastered": false },
            { "id": 264, "word": "Propriety", "bengali": "সম্পত্তি", "english": "fitness; correct conduct", "mastered": false },
            { "id": 265, "word": "Proscribe", "bengali": "নির্বাসিত করা", "english": "ostracize; banish; outlaw", "mastered": false },
            { "id": 266, "word": "Pungent", "bengali": "তীব্র কটু, কুটগন্ধ", "english": "stinging; sharp in taste or smell; caustic", "mastered": false },
            { "id": 267, "word": "Qualified", "bengali": "উপযুক্ত", "english": "limited; restricted", "mastered": false },
            { "id": 268, "word": "Quibble", "bengali": "টাল", "english": "minor objection or complaint", "mastered": false },
            { "id": 269, "word": "Quiescent", "bengali": "নিশ্চল", "english": "at rest; dormant; temporarily inactive", "mastered": false },
            { "id": 270, "word": "Rarefied", "bengali": "তনু", "english": "made less dense (of a gas)", "mastered": false },
            { "id": 271, "word": "Recalcitrant", "bengali": "বিরুপ", "english": "obstinately stubborn; determined to resist authority; unruly", "mastered": false },
            { "id": 272, "word": "Recant", "bengali": "প্রত্যাহার করা", "english": "disclaim or disavow; retract a previous statement; openly confess error", "mastered": false },
            { "id": 273, "word": "Recluse", "bengali": "নি:সঙ্গ", "english": "hermit; loner", "mastered": false },
            { "id": 274, "word": "Recondite", "bengali": "দুর্বোধ্য", "english": "abstruse; profound; secret", "mastered": false },
            { "id": 275, "word": "Refractory", "bengali": "অবাধ্য", "english": "stubborn; unmanageable", "mastered": false },
            { "id": 276, "word": "Refute", "bengali": "খণ্ডন", "english": "Disprove", "mastered": false },
            { "id": 277, "word": "Relegate", "bengali": "নির্বাসিত করা", "english": "banish to an inferior position; delegate; assign", "mastered": false },
            { "id": 278, "word": "Reproach", "bengali": "কলঙ্", "english": "express disapproval or disappointment", "mastered": false },
            { "id": 279, "word": "Reprobate", "bengali": "হীন ব্যকি", "english": "person hardened in sin; devoid of a sense of decency", "mastered": false },
            { "id": 280, "word": "Repudiate", "bengali": "পরিত্যাগ করা", "english": "disown; disavow", "mastered": false },
            { "id": 281, "word": "Rescind", "bengali": "বাতিল করা", "english": "Cancel", "mastered": false },
            { "id": 282, "word": "Resolution", "bengali": "সমাধান", "english": "Determination", "mastered": false },
            { "id": 283, "word": "Resolve", "bengali": "সমাধান করুন", "english": "determination; firmness of purpose", "mastered": false },
            { "id": 284, "word": "Reticent", "bengali": "স্বল্পভাষী", "english": "reserved; uncommunicative; inclined to silence", "mastered": false },
            { "id": 285, "word": "Reverent", "bengali": "ভক্তিপূর্ণ", "english": "respectful; worshipful", "mastered": false },
            { "id": 286, "word": "Sage", "bengali": "ঋষি, মহাজ্ঞানী", "english": "person celebrated for wisdom", "mastered": false },
            { "id": 287, "word": "Salubrious", "bengali": "স্বাস্থ্যকর", "english": "Healthful", "mastered": false },
            { "id": 288, "word": "Sanction", "bengali": "অনুমোদন", "english": "approve; ratify", "mastered": false },
            { "id": 289, "word": "Satiate", "bengali": "সম্পূর্ণ পরিতৃপ্ত করা", "english": "satisfy fully", "mastered": false },
            { "id": 290, "word": "Saturate", "bengali": "পরিপূর্ণ করা", "english": "soak thoroughly", "mastered": false },
            { "id": 291, "word": "Savor", "bengali": "গন্ধ", "english": "enjoy; have a distinctive flavor, smell, or quality", "mastered": false },
            { "id": 292, "word": "Secrete", "bengali": "লুকাইয়া রাখা", "english": "hide away or cache; produce and release a substance into an organism", "mastered": false },
            { "id": 293, "word": "Shard", "bengali": "খোলা", "english": "fragment, generally of pottery", "mastered": false },
            { "id": 294, "word": "Skeptic", "bengali": "সংশযী", "english": "doubter; person who suspends judgment until having examined evidence supporting a point of view", "mastered": false },
            { "id": 295, "word": "Solicitous", "bengali": "উজ্জ্বষ্ঠিত", "english": "worried; concerned", "mastered": false },
            { "id": 296, "word": "Soporific", "bengali": "নিদ্রাজনক, নিদ্রাকর্ষক", "english": "sleep-causing; marked by sleepiness", "mastered": false },
            { "id": 297, "word": "Specious", "bengali": "ভালো", "english": "seemingly reasonable but incorrect; misleading (often intentionally)", "mastered": false },
            { "id": 298, "word": "Spectrum", "bengali": "বর্ণালী", "english": "colored band produced when a beam of light passes through a prism", "mastered": false },
            { "id": 299, "word": "Sporadic", "bengali": "বিক্ষিপ্ত", "english": "occurring irregularly", "mastered": false },
            { "id": 300, "word": "Stigma", "bengali": "কলঙ্ক, কালি", "english": "token of disgrace; brand", "mastered": false },
            { "id": 301, "word": "Stint", "bengali": "সীমা", "english": "be thrifty; set limits", "mastered": false },
            { "id": 302, "word": "Stipulate", "bengali": "চুক্তির শর্ত করা", "english": "make express conditions; specify", "mastered": false },
            { "id": 303, "word": "Stolid", "bengali": "অবিচলিত, ভাবলেশহীন", "english": "dull; impassive", "mastered": false },
            { "id": 304, "word": "Striated", "bengali": "বিলেখিত", "english": "marked with parallel bands; grooved", "mastered": false },
            { "id": 305, "word": "Strut", "bengali": "বৃথা গর্বে বা আত্মগরিমায় গটগট করিয়া", "english": "pompous walk", "mastered": false },
            { "id": 306, "word": "Strut", "bengali": "ভাররক্ষা করা", "english": "supporting bar", "mastered": false },
            { "id": 307, "word": "Subpoena", "bengali": "সমন", "english": "writ summoning a witness to appear", "mastered": false },
            { "id": 308, "word": "Subside", "bengali": "হ্রাস পাওয়া", "english": "settle down; descend; grow quiet", "mastered": false },
            { "id": 309, "word": "Substantiate", "bengali": "বাস্তবায়িত করা", "english": "establish by evidence; verify; support", "mastered": false },
            { "id": 310, "word": "Supersede", "bengali": "সরাইয়া রাখা", "english": "cause to be set aside; replace; make obsolete", "mastered": false },
            { "id": 311, "word": "Supposition", "bengali": "অনুমান", "english": "hypothesis; surmise", "mastered": false },
            { "id": 312, "word": "Tacit", "bengali": "অকথিত, মৌন", "english": "understood; not put into words", "mastered": false },
            { "id": 313, "word": "Tangential", "bengali": "স্পর্শকতুল্য", "english": "peripheral; only slightly connected; digressing", "mastered": false },
            { "id": 314, "word": "Tenuous", "bengali": "অতি সূক্ষ্ম", "english": "thin; rare; slim", "mastered": false },
            { "id": 315, "word": "Tirade", "bengali": "সুদীর্ঘ বক্তৃতা", "english": "extended scolding; denunciation; harangue", "mastered": false },
            { "id": 316, "word": "Torpor", "bengali": "অস্পষ্টতা", "english": "lethargy; sluggishness; dormancy", "mastered": false },
            { "id": 317, "word": "Tortuous", "bengali": "কুটিল", "english": "winding; full of curves", "mastered": false },
            { "id": 318, "word": "Tractable", "bengali": "সহজে টানা যায় এমন", "english": "docile; easily managed", "mastered": false },
            { "id": 319, "word": "Transgression", "bengali": "পাপ", "english": "violation of a law; sin", "mastered": false },
            { "id": 20, "word": "Truculence", "bengali": "নিষ্ঠুরতা", "english": "aggressiveness; ferocity", "mastered": false },
            { "id": 321, "word": "Vacillate", "bengali": "আন্দোলিত হওয়া, দোলায়মান হওয়া", "english": "waver; fluctuate", "mastered": false },
            { "id": 322, "word": "Venerate", "bengali": "শ্রদ্ধা করা", "english": "revere", "mastered": false },
            { "id": 323, "word": "Veracious", "bengali": "সত্যবাদী, সত্যনিষ্ঠ", "english": "truthful", "mastered": false },
            { "id": 324, "word": "Verbose", "bengali": "শব্দবহুল, শব্দভারাক্রান্ত", "english": "wordy", "mastered": false },
            { "id": 325, "word": "Viable", "bengali": "টেকসই", "english": "practical or workable", "mastered": false },
            { "id": 326, "word": "Viscous", "bengali": "আঠালো চচ্চটে", "english": "sticky, gluey", "mastered": false },
            { "id": 327, "word": "Vituperative", "bengali": "গালাগালিপূর্ণ, নিন্দাপূর্ণ", "english": "abusive; scolding", "mastered": false },
            { "id": 328, "word": "Volatile", "bengali": "পরিবর্তনশীল", "english": "changeable; explosive; evaporation rapidly", "mastered": false },
            { "id": 329, "word": "Warranted", "bengali": "নিশ্চয় করিয়া বলা", "english": "justified; authorized", "mastered": false },
            { "id": 330, "word": "Wary", "bengali": "সতর্ক, সাবধান", "english": "very cautious", "mastered": false },
            { "id": 331, "word": "Welter", "bengali": "অশান্তি, টালমাটাল", "english": "turmoil; bewildering jumble", "mastered": false },
            { "id": 332, "word": "Whimsical", "bengali": "কিম্ভুতকিমাকার, খামখেয়ালী", "english": "capricious; fanciful", "mastered": false },
            { "id": 333, "word": "Zealot", "bengali": "অতি গোঁড়া লোক, ধর্মান্ধ", "english": "fanatic; person who shows excessive zeal", "mastered": false }
        ];
    // ... (The full list of 333 words would go here)
];

// --- 2. STATE MANAGEMENT ---
let masteredCount = 0;
let currentFilter = 'all'; // 'all', 'mastered', 'unmastered'
let practiceList = [];
let currentPracticeIndex = 0;

// DOM Elements
const contentContainer = document.getElementById('contentContainer');
const statsContainer = document.getElementById('statsContainer');
const navLinks = document.querySelectorAll('.nav-link');
const modal = document.getElementById('wordModal');
const modalContent = document.getElementById('modal-content');
const toast = document.getElementById('toast');

// --- 3. CORE FUNCTIONS ---

/**
 * Save current state to localStorage
 */
function saveState() {
    try {
        const state = {
            vocabList: vocabList.map(w => ({ id: w.id, mastered: w.mastered })),
            masteredCount: masteredCount
        };
        localStorage.setItem('gre333State', JSON.stringify(state));
    } catch (e) {
        console.error("Failed to save state:", e);
    }
}

/**
 * Load state from localStorage
 */
function loadState() {
    try {
        const savedState = localStorage.getItem('gre333State');
        if (savedState) {
            const state = JSON.parse(savedState);
            masteredCount = state.masteredCount || 0;
            
            // Create a map for quick lookup
            const masteredMap = new Map(state.vocabList.map(w => [w.id, w.mastered]));
            
            vocabList.forEach(word => {
                if (masteredMap.has(word.id)) {
                    word.mastered = masteredMap.get(word.id);
                }
            });
        }
    } catch (e) {
        console.error("Failed to load state:", e);
        masteredCount = 0; // Reset on error
    }
}

/**
 * Update the statistics bar
 */
function updateStats() {
    const totalWords = vocabList.length;
    const unmasteredCount = totalWords - masteredCount;
    const percentage = totalWords > 0 ? ((masteredCount / totalWords) * 100).toFixed(1) : 0;

    statsContainer.innerHTML = `
        <div class="text-center md:text-left">
            <span class="font-semibold text-blue-600">${masteredCount}</span>
            <span class="text-gray-600">Mastered</span>
        </div>
        <div class="text-center md:text-left">
            <span class="font-semibold text-red-600">${unmasteredCount}</span>
            <span class="text-gray-600">Unmastered</span>
        </div>
        <div class="w-full md:w-1/3">
            <div class="bg-gray-200 rounded-full h-2.5">
                <div class="bg-blue-600 h-2.5 rounded-full" style="width: ${percentage}%"></div>
            </div>
            <p class="text-center text-sm text-gray-600 mt-1">${percentage}% Complete</p>
        </div>
    `;
}

/**
 * Show a toast notification
 */
function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

/**
 * Toggle a word's mastered status
 */
function toggleMastered(wordId, fromPractice = false) {
    const word = vocabList.find(w => w.id === wordId);
    if (word) {
        word.mastered = !word.mastered;
        if (word.mastered) {
            masteredCount++;
            showToast(`"${word.word}" marked as mastered!`);
        } else {
            masteredCount--;
            showToast(`"${word.word}" marked as unmastered.`);
        }
        
        saveState();
        updateStats();

        // Re-render the list if we're on the list page
        if (document.getElementById('word-list-container')) {
            renderWordList(currentFilter);
        }

        // If toggled from practice, update the card's state
        if (fromPractice) {
            const button = document.querySelector(`[data-word-id="${wordId}"]`);
            if (button) {
                if (word.mastered) {
                    button.classList.remove('bg-gray-200', 'hover:bg-gray-300');
                    button.classList.add('bg-green-100', 'text-green-700', 'hover:bg-green-200');
                    button.innerHTML = '<i data-lucide="check-circle" class="w-4 h-4 mr-1"></i> Mastered';
                } else {
                    button.classList.remove('bg-green-100', 'text-green-700', 'hover:bg-green-200');
                    button.classList.add('bg-gray-200', 'hover:bg-gray-300');
                    button.innerHTML = '<i data-lucide="circle" class="w-4 h-4 mr-1"></i> Mark as Mastered';
                }
                if (typeof lucide !== 'undefined') lucide.createIcons(); // Re-render icon
            }
        }
    }
}

/**
 * Show the word detail modal
 */
function showModal(word) {
    modalContent.innerHTML = `
        <div class="flex justify-between items-center mb-4">
            <h2 id="modal-title" class="text-2xl font-bold text-gray-800">${word.word}</h2>
            <button id="closeModalBtn" class="text-gray-500 hover:text-gray-700" aria-label="Close modal">
                <i data-lucide="x" class="w-6 h-6"></i>
            </button>
        </div>
        <div>
            <p class="text-lg text-gray-700 mb-2"><strong>Bengali:</strong> ${word.bengali}</p>
            <p class="text-lg text-gray-700"><strong>English:</strong> ${word.english}</p>
        </div>
    `;
    modal.classList.remove('hidden');
    if (typeof lucide !== 'undefined') lucide.createIcons(); // Render icons in modal

    // Add close event listener
    document.getElementById('closeModalBtn').addEventListener('click', () => {
        modal.classList.add('hidden');
    });
}

// Close modal on outside click
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.add('hidden');
    }
});

/**
 * Render the full word list
 */
function renderWordList(filter = 'all') {
    currentFilter = filter;
    
    const filteredList = vocabList.filter(word => {
        if (filter === 'mastered') return word.mastered;
        if (filter === 'unmastered') return !word.mastered;
        return true;
    });

    const totalWords = vocabList.length;

    const listHtml = filteredList.map(word => `
        <div class="flex items-center justify-between p-4 border-b border-gray-200 last:border-b-0 hover:bg-gray-50">
            <div>
                <h3 class="font-semibold text-lg text-gray-800">${word.word}</h3>
                <p class="text-gray-600">${word.bengali}</p>
            </div>
            <div class="flex space-x-2">
                <button class="p-2 text-gray-500 hover:text-blue-600 rounded-full hover:bg-blue-100 transition-colors view-details" data-word-id="${word.id}" aria-label="View details for ${word.word}">
                    <i data-lucide="eye" class="w-5 h-5"></i>
                </button>
                <button class="p-2 ${word.mastered ? 'text-green-600 hover:text-green-800' : 'text-gray-400 hover:text-gray-600'} rounded-full ${word.mastered ? 'hover:bg-green-100' : 'hover:bg-gray-200'} transition-colors toggle-mastered" data-word-id="${word.id}" aria-label="${word.mastered ? 'Mark as unmastered' : 'Mark as mastered'}">
                    <i data-lucide="${word.mastered ? 'check-circle' : 'circle'}" class="w-5 h-5"></i>
                </button>
            </div>
        </div>
    `).join('');

    contentContainer.innerHTML = `
        <div id="word-list-container">
            <div class="flex justify-center space-x-2 mb-4">
                <button class="filter-btn ${filter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'} px-4 py-2 rounded-full text-sm font-medium" data-filter="all">All (${vocabList.length})</button>
                <button class="filter-btn ${filter === 'unmastered' ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-700'} px-4 py-2 rounded-full text-sm font-medium" data-filter="unmastered">Unmastered (${totalWords - masteredCount})</button>
                <button class="filter-btn ${filter === 'mastered' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700'} px-4 py-2 rounded-full text-sm font-medium" data-filter="mastered">Mastered (${masteredCount})</button>
            </div>
            <div class="border border-gray-200 rounded-lg overflow-hidden">
                ${listHtml || '<p class="text-center p-6 text-gray-500">No words match this filter.</p>'}
            </div>
        </div>
    `;
    
    // Re-render icons
    if (typeof lucide !== 'undefined') lucide.createIcons();

    // Add event listeners for new buttons
    contentContainer.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            renderWordList(e.currentTarget.dataset.filter);
        });
    });

    contentContainer.querySelectorAll('.view-details').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const wordId = parseInt(e.currentTarget.dataset.wordId);
            const word = vocabList.find(w => w.id === wordId);
            if (word) showModal(word);
        });
    });

    contentContainer.querySelectorAll('.toggle-mastered').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const wordId = parseInt(e.currentTarget.dataset.wordId);
            toggleMastered(wordId, false);
        });
    });
}


// --- 4. PAGE LOADERS ---

/**
 * Load the Welcome Screen
 */
function loadWelcome() {
    contentContainer.innerHTML = `
        <div class="text-center">
            <i data-lucide="book-open" class="w-16 h-16 text-blue-600 mx-auto mb-4"></i>
            <h2 class="text-2xl font-semibold text-gray-800 mb-2">Welcome to Your GRE Prep!</h2>
            <p class="text-gray-600 mb-6 max-w-prose mx-auto">
                This tool is designed to help you master the 333 most common GRE words.
                You can browse the <strong>Full List</strong>, mark words you've mastered,
                and test your knowledge in the <strong>Practice</strong> section.
            </p>
            <button class="bg-blue-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-sm" id="startPracticeBtn">
                Start Practicing Unmastered Words
            </button>
        </div>
    `;
    // Must call createIcons after changing innerHTML
    if (typeof lucide !== 'undefined') lucide.createIcons(); 
    
    document.getElementById('startPracticeBtn').addEventListener('click', () => {
        loadPractice('unmastered');
        // Manually update nav link active state
        navLinks.forEach(link => {
            link.classList.toggle('active', link.dataset.target === 'practice');
        });
    });
}

/**
 * Load the Full List page
 */
function loadFullList() {
    renderWordList(currentFilter); // Render with the currently active filter
}

/**
 * Load the Practice page
 */
function loadPractice(filter = 'unmastered') {
    if (filter === 'unmastered') {
        practiceList = vocabList.filter(w => !w.mastered);
    } else {
        practiceList = [...vocabList]; // Full list
    }

    if (practiceList.length === 0) {
        contentContainer.innerHTML = `
            <div class="text-center">
                <i data-lucide="party-popper" class="w-16 h-16 text-green-600 mx-auto mb-4"></i>
                <h2 class="text-2xl font-semibold text-gray-800 mb-2">All Done!</h2>
                <p class="text-gray-600 mb-6 max-w-prose mx-auto">
                    You've mastered all the words. Great job!
                </p>
                <button class="bg-blue-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-sm" id="reviewAllBtn">
                    Review All Words
                </button>
            </div>
        `;
        if (typeof lucide !== 'undefined') lucide.createIcons();
        
        document.getElementById('reviewAllBtn').addEventListener('click', () => {
            loadPractice('all');
        });
        return;
    }

    // Shuffle the practice list
    practiceList.sort(() => Math.random() - 0.5);
    currentPracticeIndex = 0;

    // Render the practice area
    contentContainer.innerHTML = `
        <div id="practice-area" class="flex flex-col items-center">
            <p class="text-gray-600 mb-4" id="practice-counter">
                Word 1 of ${practiceList.length}
            </p>
            <div id="flashcard-container" class="mb-6 w-full flex justify-center">
                </div>
            
            <div class="flex justify-between w-full max-w-lg">
                <button id="prevCardBtn" class="bg-gray-300 text-gray-800 font-medium px-6 py-3 rounded-lg hover:bg-gray-400 transition-colors shadow-sm flex items-center disabled:opacity-50" disabled>
                    <i data-lucide="arrow-left" class="w-5 h-5 mr-2"></i> Prev
                </button>
                <button id="nextCardBtn" class="bg-blue-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-sm flex items-center">
                    Next <i data-lucide="arrow-right" class="w-5 h-5 ml-2"></i>
                </button>
            </div>
        </div>
    `;
    
    renderPracticeCard();
}

/**
 * Render the current practice flashcard
 */
function renderPracticeCard() {
    const word = practiceList[currentPracticeIndex];
    const cardContainer = document.getElementById('flashcard-container');
    if (!cardContainer) return;

    cardContainer.innerHTML = `
        <div class="flip-card" id="flashcard">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <h2 class="text-4xl font-bold text-gray-800">${word.word}</h2>
                </div>
                <div class="flip-card-back">
                    <p class="text-xl font-semibold text-gray-700 mb-3">${word.bengali}</p>
                    <p class="text-lg text-gray-600 mb-6">${word.english}</p>
                    <button class="toggle-mastered-practice text-sm font-medium py-2 px-4 rounded-lg flex items-center transition-colors ${word.mastered ? 'bg-green-100 text-green-700 hover:bg-green-200' : 'bg-gray-200 hover:bg-gray-300'}" data-word-id="${word.id}">
                        <i data-lucide="${word.mastered ? 'check-circle' : 'circle'}" class="w-4 h-4 mr-1"></i> 
                        ${word.mastered ? 'Mastered' : 'Mark as Mastered'}
                    </button>
                </div>
            </div>
        </div>
    `;

    const flashcard = document.getElementById('flashcard');
    flashcard.addEventListener('click', () => {
        flashcard.classList.toggle('is-flipped');
    });
    
    // Add event listener for the toggle button
    cardContainer.querySelector('.toggle-mastered-practice').addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent card from flipping
        const wordId = parseInt(e.currentTarget.dataset.wordId);
        toggleMastered(wordId, true); // true = fromPractice
    });

    // Update counter and buttons
    document.getElementById('practice-counter').textContent = `Word ${currentPracticeIndex + 1} of ${practiceList.length}`;
    
    const prevBtn = document.getElementById('prevCardBtn');
    const nextBtn = document.getElementById('nextCardBtn');
    
    prevBtn.disabled = (currentPracticeIndex === 0);
    
    if (currentPracticeIndex === practiceList.length - 1) {
        nextBtn.textContent = 'Finish';
        nextBtn.classList.add('bg-green-600', 'hover:bg-green-700');
        nextBtn.classList.remove('bg-blue-600', 'hover:bg-blue-700');
        nextBtn.innerHTML = 'Finish <i data-lucide="party-popper" class="w-5 h-5 ml-2"></i>';
    } else {
        nextBtn.textContent = 'Next';
        nextBtn.classList.remove('bg-green-600', 'hover:bg-green-700');
        nextBtn.classList.add('bg-blue-600', 'hover:bg-blue-700');
        nextBtn.innerHTML = 'Next <i data-lucide="arrow-right" class="w-5 h-5 ml-2"></i>';
    }

    if (typeof lucide !== 'undefined') lucide.createIcons(); // Render all icons
}

/**
 * Handle Practice Navigation
 */
function setupPracticeListeners() {
    contentContainer.addEventListener('click', (e) => {
        const prevBtn = e.target.closest('#prevCardBtn');
        const nextBtn = e.target.closest('#nextCardBtn');

        if (prevBtn && !prevBtn.disabled) {
            currentPracticeIndex--;
            renderPracticeCard();
        }
        
        if (nextBtn) {
            if (currentPracticeIndex < practiceList.length - 1) {
                currentPracticeIndex++;
                renderPracticeCard();
            } else {
                // Finish session
                loadWelcome(); // Go back to welcome screen
                navLinks.forEach(link => {
                    link.classList.toggle('active', link.dataset.target === 'welcome');
                });
            }
        }
    });
}


/**
 * Handle main navigation clicks
 */
function handleNavClick(e) {
    const targetPage = e.currentTarget.dataset.target;

    // Update active link
    navLinks.forEach(link => {
        link.classList.toggle('active', link.dataset.target === targetPage);
    });

    // Load content
    switch (targetPage) {
        case 'welcome':
            loadWelcome();
            break;
        case 'full-list':
            loadFullList();
            break;
        case 'practice':
            loadPractice('unmastered');
            break;
    }
}

// --- 5. INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    navLinks.forEach(link => {
        link.addEventListener('click', handleNavClick);
    });

    setupPracticeListeners(); // Setup practice button listeners once

    loadState();    // Load from localStorage
    loadWelcome();  // Load the initial page
    updateStats();  // Render stats bar

    // IMPORTANT: Initial call to render icons
    // We check if 'lucide' is defined, which it should be
    // because our script is deferred and runs after the lucide script.
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    } else {
        // Fallback in case lucide fails to load
        console.error("Lucide icon library did not load.");
    }
});
