// --- 1. VOCABULARY DATA ---
const vocabList = [
    { "id": 1, "word": "Abate", "bengali": "দূর করা, হ্রাস পাওয়া, কমা, প্রশমিত করা", "english": "subside, or moderate" },
    { "id": 2, "word": "Aberrant", "bengali": "বিচ্যুত, বিপথগামী", "english": "abnormal, or deviant" },
    { "id": 3, "word": "Abeyance", "bengali": "মুলতবি অবস্থা, সাময়িক অক্রিয়তা", "english": "suspended action" },
    { "id": 4, "word": "Abscond", "bengali": "পলাতক হওয়া, আত্মগোপন করিয়া থাকা", "english": "depart secretly and hide" },
    { "id": 5, "word": "Abstemious", "bengali": "সংযমী, মিতাচারী", "english": "sparing in eating and drinking; temperate" },
    { "id": 6, "word": "Admonish", "bengali": "সতর্ক করা, সাবধান করে দেওয়া", "english": "warn; reprove" },
    { "id": 7, "word": "Adulterate", "bengali": "বিশুদ্ধতা নষ্ট করা, ভেজালমিশ্রিত, ব্যভিচা", "english": "make impure by adding inferior or tainted substances" },
    { "id": 8, "word": "Aesthetic", "bengali": "নান্দনিক, সৌন্দর্যবোধ সংক্রান্ত", "english": "artistic; dealing with or capable of appreciating the beautiful" },
    { "id": 9, "word": "Aggregate", "bengali": "সমষ্টিগত, একত্র করা", "english": "gather; accumulate" },
    { "id": 10, "word": "Alacrity", "bengali": "উৎসাহ, সানন্দ, ব্যগ্রতা, উদ্দীপনা", "english": "cheerful promptness; eagerness" },
    { "id": 11, "word": "Alleviate", "bengali": "উপশম, দূর করা", "english": "Relieve" },
    { "id": 12, "word": "Amalgamate", "bengali": "সংযুক্ত করা, সম্মিলিত করা", "english": "combine; unite in one body" },
    { "id": 13, "word": "Ambiguous", "bengali": "অস্পষ্ট, অনিশ্চিত, রহস্যময়", "english": "unclear or doubtful in meaning" },
    { "id": 14, "word": "Ambivalence", "bengali": "বিরোধ, দ্বিমুখিতা, অনিশ্চয়তা", "english": "the state of having contradictory or conflicting emotional attitudes" },
    { "id": 15, "word": "Ameliorate", "bengali": "উন্নত করা, উন্নতি করা, উজ্জর্ষ সাধন করা", "english": "Improve" },
    { "id": 16, "word": "Anachronism", "bengali": "কালব্যতিক্রম, কালবৈষম্য", "english": "something or someone misplaced in time" },
    { "id": 17, "word": "Analogous", "bengali": "অনুরূপ, তুলনীয়", "english": "Comparable" },
    { "id": 18, "word": "Anarchy", "bengali": "নৈরাজ্য, অরাজকতা, বিশৃঙ্খলা", "english": "absence of governing body; state of disorder" },
    { "id": 19, "word": "Anomalous", "bengali": "ব্যতিক্রমী, অস্বাভাবিক", "english": "abnormal; irregular" },
    { "id": 20, "word": "Antipathy", "bengali": "বিরোধিতা, বিদ্বেষ", "english": "aversion; dislike" },
    { "id": 21, "word": "Apathy", "bengali": "উদাসীনতা, অরূচি", "english": "lack of caring; indifference" },
    { "id": 22, "word": "Appease", "bengali": "রশমিত করা, খুশি করা", "english": "pacify or soothe; relieve" },
    { "id": 23, "word": "Apprise", "bengali": "জ্ঞাপন করা", "english": "Inform" },
    { "id": 24, "word": "Approbation", "bengali": "অনুমোদন", "english": "Approval" },
    { "id": 25, "word": "Appropriate", "bengali": "উপযুক্ত, যথাযথ", "english": "acquire; take possession of for one's own use" },
    { "id": 26, "word": "Arduous", "bengali": "শ্রমসাধ্য, কষ্টসাধ্য", "english": "hard; strenuous" },
    { "id": 27, "word": "Artless", "bengali": "সরল, কৌশলহীন", "english": "without guile; open and honest" },
    { "id": 28, "word": "Ascetic", "bengali": "সাধু, যোগী", "english": "practicing self-denial; austere" },
    { "id": 29, "word": "Assiduous", "bengali": "উদ্যোগী, পরিশ্রমী", "english": "Diligent" },
    { "id": 30, "word": "Assuage", "bengali": "উপশম করা, হ্রাস করা", "english": "ease or lessen (pain); satisfy (hunger); soothe (anger)" },
    { "id": 31, "word": "Attenuate", "bengali": "কাহিল, মূল্য কমান", "english": "make thinner" },
    { "id": 32, "word": "Audacious", "bengali": "দুঃসাহসী, উদ্ধত", "english": "daring; bold" },
    { "id": 33, "word": "Austere", "bengali": "কঠোর, কঠোর আত্মসংযমী", "english": "forbiddingly stern; severely simple and unornamented" },
    { "id": 34, "word": "Autonomous", "bengali": "স্বায়ত্বশাসিত, স্বশাসিত", "english": "self-governing; independent" },
    { "id": 35, "word": "Aver", "bengali": "আছে", "english": "assert confidently or declare; as used in law, state formally as a fact" },
    { "id": 36, "word": "Banal", "bengali": "গতানুগতিক, মামুলি", "english": "hackneyed; commonplace; trite; lacking originality" },
    { "id": 37, "word": "Belie", "bengali": "মিথ্যা ধারণা জন্মান, প্রমাণ করিতে অমর্থন হওযা", "english": "contradict; give a false impression" },
    { "id": 38, "word": "Beneficent", "bengali": "দয়ালু, দানশীল", "english": "kindly; doing good" },
    { "id": 39, "word": "Bolster", "bengali": "কোলবালিশ, ঠেস দেওয়ান", "english": "support; reinforce" },
    { "id": 40, "word": "Bombastic", "bengali": "শব্দাড়ম্বরপূর্ণ, অত্যধিক জমকালো", "english": "pompous; using inflated language" },
    { "id": 41, "word": "Boorish", "bengali": "বর্বর, গেঁয়ো", "english": "rude; insensitive" },
    { "id": 42, "word": "Burgeon", "bengali": "পাতা ধরা, মুকুল", "english": "grow forth; send out buds" },
    { "id": 43, "word": "Burnish", "bengali": "পালিশ করা, চাকচক্য", "english": "make shiny by rubbing; polish" },
    { "id": 44, "word": "Buttress", "bengali": "ঠেকনো, শক্তিশালী করা", "english": "support; prop up" },
    { "id": 45, "word": "Capricious", "bengali": "খামখেয়ালী, অনিয়মিত", "english": "unpredictable; fickle" },
    { "id": 46, "word": "Castigation", "bengali": "কঠোর সমালোচনা, শাস্তি", "english": "punishment; severe criticism" },
    { "id": 47, "word": "Catalyst", "bengali": "অনুঘটক", "english": "agent that increases the pace of a chemical action" },
    { "id": 48, "word": "Caustic", "bengali": "দগ্ধকারক পদার্থ, দাহক", "english": "burning; sarcastically biting" },
    { "id": 49, "word": "Chicanery", "bengali": "প্রতারণা, ছল", "english": "trickery; deception" },
    { "id": 50, "word": "Coagulate", "bengali": "জমাট বাঁধা, ঘনীভূত হওয়া", "english": "thicken; congeal; clot" },
    { "id": 51, "word": "Coda", "bengali": "সংক্ষিপ্ত করা", "english": "concluding section of a musical or literary composition; summarizes or concludes" },
    { "id": 52, "word": "Cogent", "bengali": "প্রবল, জোরালো", "english": "convincing" },
    { "id": 53, "word": "Commensurate", "bengali": "আনুপাতিক", "english": "corresponding in extent, degree, etc.; proportionate" },
    { "id": 54, "word": "Compendium", "bengali": "সারসংক্ষেপ", "english": "brief, comprehensive summary" },
    { "id": 55, "word": "Complaisant", "bengali": "প্রদায়ক, পরোপকারী", "english": "trying to please; overly polite; obliging" },
    { "id": 56, "word": "Compliant", "bengali": "সঙ্গতিশীল, বিনয়ী", "english": "yielding; conforming to requirements" },
    { "id": 57, "word": "Conciliatory", "bengali": "বন্ধুত্বপূর্ণ", "english": "reconciling; soothing" },
    { "id": 58, "word": "Condone", "bengali": "ক্ষমা করা, মকুব করা", "english": "overlook; forgive; give tacit approval; excuse" },
    { "id": 59, "word": "Confound", "bengali": "ভুল করা", "english": "confuse; puzzle" },
    { "id": 60, "word": "Connoisseur", "bengali": "রসপণ্ডিত, শিল্পকলা প্রভৃতির সমঝদার", "english": "person competent to act as a judge of art; a lover of art" },
    { "id": 61, "word": "Contention", "bengali": "বিবাদ, যুক্তি", "english": "claim; thesis" },
    { "id": 62, "word": "Contentious", "bengali": "কুস্বভাব", "english": "quarrelsome" },
    { "id": 63, "word": "Contrite", "bengali": "অনুতপ্ত", "english": "penitent" },
    { "id": 64, "word": "Conundrum", "bengali": "হেঁয়ালি", "english": "riddle; difficult problem" },
    { "id": 65, "word": "Converge", "bengali": "একই বিন্দুতে মিলিত হওয়া", "english": "approach; tend to meet; come together" },
    { "id": 66, "word": "Convoluted", "bengali": "বাঁকানো, জটিল", "english": "coiled around; involved; intricate" },
    { "id": 67, "word": "Craven", "bengali": "কাপুরুষ", "english": "cowardly" },
    { "id": 68, "word": "Daunt", "bengali": "ভয় দেখানো", "english": "intimidate; frighten" },
    { "id": 69, "word": "Decorum", "bengali": "ভদ্রতা", "english": "propriety; orderliness and good taste in manners" },
    { "id": 70, "word": "Default", "bengali": "অনুপস্থিতি", "english": "failure to act" },
    { "id": 71, "word": "Deference", "bengali": "মানিয়া লওয়া", "english": "courteous regard for another's wishes" },
    { "id": 72, "word": "Delineate", "bengali": "বর্ণনা করা", "english": "portray; depict; sketch" },
    { "id": 73, "word": "Denigrate", "bengali": "কলঙ্কিত করা, হেয় করা", "english": "blacken" },
    { "id": 74, "word": "Deride", "bengali": "উপহাস করা, বিদ্রূপ করা", "english": "ridicule; make fun of" },
    { "id": 75, "word": "Derivative", "bengali": "শিক্ষাদীক্ষিক", "english": "unoriginal; obtained from another source" },
    { "id": 76, "word": "Desiccate", "bengali": "শুষ্ক করা, শুকান", "english": "dry up" },
    { "id": 77, "word": "Desultory", "bengali": "এলোমেলো", "english": "aimless; haphazard; digressing at random" },
    { "id": 78, "word": "Deterrent", "bengali": "প্রতিবন্ধক", "english": "Something that discourages; hindrance" },
    { "id": 79, "word": "Diatribe", "bengali": "সুদীর্ঘ আলোচণা", "english": "bitter scolding; invective" },
    { "id": 80, "word": "Dichotomy", "bengali": "বৈপরীত্য, দ্বিবিভাজন", "english": "split; branching into two parts (especially contradictory ones)" },
    { "id": 81, "word": "Diffidence", "bengali": "অবিশ্বাস", "english": "Shyness" },
    { "id": 82, "word": "Diffuse", "bengali": "মেলা", "english": "wordy, rambling, spread out (like a gas)" },
    { "id": 83, "word": "Digression", "bengali": "অবান্তরতা", "english": "Wandering away from the subject" },
    { "id": 84, "word": "Dirge", "bengali": "গান, অন্ত্যোষ্টিগাথা", "english": "Lament with music" },
    { "id": 85, "word": "Disabuse", "bengali": "ভুল ধারণা বা মোহ থেকে মুক্ত করা", "english": "correct a false impression; undeceive" },
    { "id": 86, "word": "Discerning", "bengali": "নির্ণায়ক", "english": "mentally quick and observant; having insight" },
    { "id": 87, "word": "Discordant", "bengali": "বিসদৃশ", "english": "not harmonious; conflicting" },
    { "id": 88, "word": "Discredit", "bengali": "সুনামহানি, কল", "english": "defame; destroy confidence in; disbelieve" },
    { "id": 89, "word": "Discrepancy", "bengali": "অমিল", "english": "lack of consistency; difference" },
    { "id": 90, "word": "Discrete", "bengali": "স্বতন্ত্র", "english": "separate; unconnected; consisting of distinct parts" },
    { "id": 91, "word": "Disingenuous", "bengali": "অন্ত: সারশূণ্য", "english": "lacking genuine candor; insincere" },
    { "id": 92, "word": "Disinterested", "bengali": "অনিচ্ছুক", "english": "Unprejudiced" },
    { "id": 93, "word": "Disjointed", "bengali": "টুকরা টুকরা", "english": "lacking coherence; separated at the joints" },
    { "id": 94, "word": "Dismiss", "bengali": "খারিজ, বাদ দেওয়া", "english": "eliminate from consideration; reject" },
    { "id": 95, "word": "Disparage", "bengali": "অবজ্ঞা করা", "english": "Belittle" },
    { "id": 96, "word": "Disparate", "bengali": "অসম", "english": "basically different; unrelated" },
    { "id": 97, "word": "Dissemble", "bengali": "গোপন রাখা", "english": "disguise; pretend" },
    { "id": 98, "word": "Disseminate", "bengali": "প্রচার করা", "english": "distribute; spread; scatter (like seeds)" },
    { "id": 99, "word": "Dissolution", "bengali": "শিথিলীকরণ", "english": "disintegration; looseness in morals" },
    { "id": 100, "word": "Dissonance", "bengali": "অনৈক্য", "english": "discord; opposite of harmony" },
    { "id": 101, "word": "Distend", "bengali": "ফাঁপা", "english": "expand; swell out" },
    { "id": 102, "word": "Distill", "bengali": "পাতন করা, বিশুদ্ধ করা", "english": "purify; refine; concentrate" },
    { "id": 103, "word": "Diverge", "bengali": "বিপথগামী হওযা", "english": "vary; go in different directions from the same point" },
    { "id": 104, "word": "Divest", "bengali": "পরিত্যাগ করা", "english": "strip; deprive" },
    { "id": 105, "word": "Document", "bengali": "দলিল, নথিপত্র", "english": "provide written evidence" },
    { "id": 106, "word": "Dogmatic", "bengali": "উদ্ধত", "english": "opinionated; arbitrary; doctrinal" },
    { "id": 107, "word": "Dormant", "bengali": "সপ্ত", "english": "sleeping; lethargic; latent" },
    { "id": 108, "word": "Dupe", "bengali": "প্রতারণা করা", "english": "someone easily fooled" },
    { "id": 109, "word": "Ebullient", "bengali": "উত্তেজিত", "english": "showing excitement; overflowing with enthusiasm" },
    { "id": 110, "word": "Eclectic", "bengali": "সারগ্রাহী", "english": "selective; composed of elements drawn from disparate sources" },
    { "id": 111, "word": "Efficacy", "bengali": "ফলপ্রসূতা, কার্যক্ষমতা", "english": "power to produce desired effect" },
    { "id": 112, "word": "Effrontery", "bengali": "বেহায়াপনা", "english": "impudence; shameless boldness; sheer nerve; presumptuousness" },
    { "id": 113, "word": "Elegy", "bengali": "শোকসঙ্গীত", "english": "poem or song expressing lamentation" },
    { "id": 114, "word": "Elicit", "bengali": "প্রকাশ করা", "english": "draw out by discussion" },
    { "id": 115, "word": "Embellish", "bengali": "সুশোভিত করা", "english": "adorn; ornament; enhance, as a story" },
    { "id": 116, "word": "Empirical", "bengali": "গবেষণামূলক", "english": "based on experience" },
    { "id": 117, "word": "Emulate", "bengali": "অনুকরণ", "english": "imitate; rival" },
    { "id": 118, "word": "Endemic", "bengali": "সমকক্ষ হইতে বা ছাপাইয়া যাইতে চেষ্ঠা", "english": "prevailing among a specific group of people or in a specific area or country" },
    { "id": 119, "word": "Enervate", "bengali": "দুর্বল করা", "english": "Weaken" },
    { "id": 120, "word": "Engender", "bengali": "প্রসব করা, জন্ম দেওয়া", "english": "cause; produce" },
    { "id": 121, "word": "Enhance", "bengali": "উন্নত করা", "english": "increase; improve" },
    { "id": 122, "word": "Ephemeral", "bengali": "অল্পক্ষণস্থায়ী", "english": "short-lived; fleeting" },
    { "id": 123, "word": "Equanimity", "bengali": "মনের বা মেজাজের সমতা অথবা", "english": "calmness of temperament; composure" },
    { "id": 124, "word": "Equivocate", "bengali": "দ্ব্যর্থবোধক বাক্য ব্যবহার করা", "english": "lie; mislead; attempt to conceal the truth" },
    { "id": 125, "word": "Erudite", "bengali": "পাণ্ডিতাপূর্ণ", "english": "learned; scholarly" },
    { "id": 126, "word": "Esoteric", "bengali": "লুকনো", "english": "hard to understand; known only to the chosen few" },
    { "id": 127, "word": "Eulogy", "bengali": "প্রশংসা", "english": "expression of praise, often on the occasion of someone's death" },
    { "id": 128, "word": "Euphemism", "bengali": "শ্রুতিকটু পদের পরিবর্তে কোমলতর", "english": "mild expression in place of an unpleasant one" },
    { "id": 129, "word": "Exacerbate", "bengali": "বিরক্ত করা", "english": "worsen; embitter" },
    { "id": 130, "word": "Exculpate", "bengali": "দোষক্ষালন করা", "english": "clear from blame" },
    { "id": 131, "word": "Exigency", "bengali": "জরুরি অবস্থা", "english": "urgent situation; pressing needs or demands; state of requiring immediate attention" },
    { "id": 132, "word": "Extrapolation", "bengali": "বহির্পাতন", "english": "projection; conjecture" },
    { "id": 133, "word": "Facetious", "bengali": "মজা-করা", "english": "joking (often inappropriately); humorous" },
    { "id": 134, "word": "Facilitate", "bengali": "সহজসাধ্য করে তোলা", "english": "help bring about; make less difficult" },
    { "id": 135, "word": "Fallacious", "bengali": "ভ্রান্ত", "english": "false; misleading" },
    { "id": 136, "word": "Fatuous", "bengali": "নির্বোধ, উদ্দেশ্যহীন", "english": "brainless; inane; foolish, yet smug" },
    { "id": 137, "word": "Fawning", "bengali": "চাটুকার", "english": "trying to please by behaving obsequiously, flattering, or cringing" },
    { "id": 138, "word": "Felicitous", "bengali": "নিখুঁত", "english": "apt; suitably expressed; well chosen" },
    { "id": 139, "word": "Fervor", "bengali": "উৎসাহ", "english": "glowing ardor; intensity of feeling" },
    { "id": 140, "word": "Flag", "bengali": "পতাকা", "english": "droop; grow feeble" },
    { "id": 141, "word": "Fledgling", "bengali": "জাতপক্ষ", "english": "inexperienced" },
    { "id": 142, "word": "Flout", "bengali": "উড়িয়ে দেওয়া", "english": "reject; mock; show contempt for" },
    { "id": 143, "word": "Foment", "bengali": "লালন করা", "english": "stir up; instigate" },
    { "id": 144, "word": "Forestall", "bengali": "কিছু আগে করা", "english": "prevent by taking action in advance" },
    { "id": 145, "word": "Frugality", "bengali": "সংযম", "english": "thrift; economy" },
    { "id": 146, "word": "Futile", "bengali": "অকার্যকর", "english": "useless; hopeless; ineffectual" },
    { "id": 147, "word": "Gainsay", "bengali": "প্রতিবাদ করা", "english": "deny" },
    { "id": 148, "word": "Garrulous", "bengali": "বাচাল", "english": "loquacious; talkative; wordy" },
    { "id": 149, "word": "Goad", "bengali": "উদ্দীপনা", "english": "urge on" },
    { "id": 150, "word": "Gouge", "bengali": "প্রতারণা", "english": "overcharge" },
    { "id": 151, "word": "Grandiloquent", "bengali": "জমকাল", "english": "pompous; bombastic; using high-sounding language" },
    { "id": 152, "word": "Gregarious", "bengali": "দলপ্রিয়, সঙ্গলিঙ্গু", "english": "sociable" },
    { "id": 153, "word": "Guileless", "bengali": "সরল", "english": "without deceit" },
    { "id": 154, "word": "Gullible", "bengali": "অতিসরল", "english": "easily deceived" },
    { "id": 155, "word": "Harangue", "bengali": "বাগাড়ম্বরপূর্ণ বক্তৃতা", "english": "long, passionate, and vehement speech" },
    { "id": 156, "word": "Homogeneous", "bengali": "সমজাতিক", "english": "of the same kind" },
    { "id": 157, "word": "Hyperbole", "bengali": "অতিশযোকি", "english": "exaggeration; overstatement" },
    { "id": 158, "word": "Iconoclastic", "bengali": "কালাপাহাড়ী", "english": "attacking cherished traditions" },
    { "id": 159, "word": "Idolatry", "bengali": "মূর্তিপূজা, অত্যধিক শ্রদ্ধা", "english": "worship of idols; excessive admiration" },
    { "id": 160, "word": "Immutable", "bengali": "অপরিবর্তনীয়", "english": "unchangeable" },
    { "id": 161, "word": "Impair", "bengali": "দুর্বল করা", "english": "injure; hurt" },
    { "id": 162, "word": "Impassive", "bengali": "অনড", "english": "without feeling; imperturbable; stoical" },
    { "id": 163, "word": "Impede", "bengali": "বাধা দেওয়া", "english": "hinder; block" },
    { "id": 164, "word": "Impermeable", "bengali": "জলরোধী", "english": "impervious; not permitting passage through its substance" },
    { "id": 165, "word": "Imperturbable", "bengali": "শান্ত", "english": "calm; placid" },
    { "id": 166, "word": "Impervious", "bengali": "অভেদ্য, অসংবেদী", "english": "impenetrable; incapable of being damaged or distressed" },
    { "id": 167, "word": "Implacable", "bengali": "নিষ্ঠুর", "english": "incapable of being pacified" },
    { "id": 168, "word": "Implicit", "bengali": "অন্তর্নিহিত", "english": "understood but not stated" },
    { "id": 169, "word": "Implode", "bengali": "কেন্দ্রীভূত করা", "english": "burst inward" },
    { "id": 170, "word": "Inadvertently", "bengali": "অনবধানতাবশত", "english": "unintentionally; by oversight; carelessly" },
    { "id": 171, "word": "Inchoate", "bengali": "অপরিণত", "english": "recently begun; rudimentary; elementary" },
    { "id": 172, "word": "Incongruity", "bengali": "অনৈক্য", "english": "lack of harmony; absurdity" },
    { "id": 173, "word": "Inconsequential", "bengali": "তুচ্ছ", "english": "insignificant; unimportant" },
    { "id": 174, "word": "Incorporate", "bengali": "বিদেহী", "english": "introduce something into a larger whole; combine; unite" },
    { "id": 175, "word": "Indeterminate", "bengali": "অনির্দিষ্ট", "english": "uncertain; not clearly fixed; indefinite" },
    { "id": 176, "word": "Indigence", "bengali": "দারিদ্র্য", "english": "Poverty" },
    { "id": 177, "word": "Indolent", "bengali": "কুড়ে, অলস", "english": "Lazy" },
    { "id": 178, "word": "Inert", "bengali": "অলস", "english": "inactive; lacking power to move" },
    { "id": 179, "word": "Ingenuous", "bengali": "অকপট", "english": "naive and trusting; young; unsophisticated" },
    { "id": 180, "word": "Inherent", "bengali": "সহজাত", "english": "firmly established by nature or habit" },
    { "id": 181, "word": "Innocuous", "bengali": "নির্দোষ", "english": "Harmless" },
    { "id": 182, "word": "Insensible", "bengali": "নির্বিকার", "english": "unconscious; unresponsive" },
    { "id": 183, "word": "Insinuate", "bengali": "কটাক্ষ করা", "english": "hint; imply; creep in" },
    { "id": 184, "word": "Insipid", "bengali": "স্বাদহীন, পানসে", "english": "lacking in flavor; dull" },
    { "id": 185, "word": "Insularity", "bengali": "সংকীর্ণচিত্ততা", "english": "narrow-mindedness; isolation" },
    { "id": 186, "word": "Intractable", "bengali": "অবাধ্য", "english": "unruly; stubborn; unyielding" },
    { "id": 187, "word": "Intransigence", "bengali": "জেদীতা", "english": "refusal of any compromise; stubbornness" },
    { "id": 188, "word": "Inundate", "bengali": "নিমজ্জিত করা", "english": "overwhelm; flood; submerge" },
    { "id": 189, "word": "Inured", "bengali": "অভ্যন্ত", "english": "accustomed; hardened" },
    { "id": 190, "word": "Invective", "bengali": "আক্রমণমূলক, কটুকি", "english": "Abuse" },
    { "id": 191, "word": "Irascible", "bengali": "খিটখিটে", "english": "irritable; easily angered" },
    { "id": 192, "word": "Irresolute", "bengali": "চঞ্চলমতি", "english": "uncertain how to act; weak" },
    { "id": 193, "word": "Itinerary", "bengali": "ভ্রমণপথ", "english": "plan of a trip" },
    { "id": 194, "word": "Laconic", "bengali": "মিতবাক", "english": "brief and to the point" },
    { "id": 195, "word": "Lassitude", "bengali": "শ্রান্তি", "english": "languor; weariness" },
    { "id": 196, "word": "Latent", "bengali": "অন্তর্নিহিত", "english": "potential but undeveloped; dormant; hidden" },
    { "id": 197, "word": "Laud", "bengali": "গুণকীর্তন", "english": "Praise" },
    { "id": 198, "word": "Lethargic", "bengali": "অলস", "english": "drowsy; dull" },
    { "id": 199, "word": "Levee", "bengali": "নদীতীরের বাঁধ, নদীর উঁচু পাড়, বাঁধ", "english": "stone embankment to prevent flooding" },
    { "id": 200, "word": "Levity", "bengali": "ছ্যাবলামি", "english": "lack of seriousness or steadiness; frivolity" },
    { "id": 201, "word": "Log", "bengali": "বাধা", "english": "record of a voyage or flight; record of day-to-day activities" },
    { "id": 202, "word": "Loquacious", "bengali": "বহুভাষী", "english": "Talkative" },
    { "id": 203, "word": "Lucid", "bengali": "পরিষ্কার", "english": "easily understood; clear; intelligible" },
    { "id": 204, "word": "Luminous", "bengali": "উজ্জ্বল", "english": "shining; issuing light" },
    { "id": 205, "word": "Magnanimity", "bengali": "মহানুভবতা, মহত্ত", "english": "Generosity" },
    { "id": 206, "word": "Malingerer", "bengali": "রোগভানকারী", "english": "one who feigns illness to escape duty" },
    { "id": 207, "word": "Malleable", "bengali": "ঘাতসহ", "english": "capable of being shaped by pounding; impressionable" },
    { "id": 208, "word": "Maverick", "bengali": "বাউন্ডুলে", "english": "rebel; nonconformist" },
    { "id": 209, "word": "Mendacious", "bengali": "মিথ্যাবাদী", "english": "lying; habitually dishonest" },
    { "id": 210, "word": "Metamorphosis", "bengali": "রুপান্তর", "english": "change of form" },
    { "id": 211, "word": "Meticulous", "bengali": "অতিসতর্ক", "english": "excessively careful; painstaking; scrupulous" },
    { "id": 212, "word": "Misanthrope", "bengali": "মানুষ্যবিদ্বেষী", "english": "one who hates mankind" },
    { "id": 213, "word": "Mitigate", "bengali": "উপশম করা, রশমিত করা", "english": "appease; moderate" },
    { "id": 214, "word": "Mollify", "bengali": "শান্ত করা", "english": "Soothe" },
    { "id": 215, "word": "Morose", "bengali": "অন্ধকারাচ্ছন", "english": "ill-humored; sullen; melancholy" },
    { "id": 216, "word": "Mundane", "bengali": "জাগতিক", "english": "worldly as opposed to spiritual; everyday" },
    { "id": 217, "word": "Negate", "bengali": "অস্বীকার করা", "english": "cancel out; nullify; deny" },
    { "id": 218, "word": "Neophyte", "bengali": "নবদীক্ষিত ব্যক্তি", "english": "recent convert; beginner" },
    { "id": 219, "word": "Obdurate", "bengali": "একগুঁয়ে", "english": "stubborn" },
    { "id": 220, "word": "Obsequious", "bengali": "চাটুকার", "english": "lavishly attentive; servile; sycophantic" },
    { "id": 221, "word": "Obviate", "bengali": "দূর করা", "english": "make unnecessary; get rid of" },
    { "id": 222, "word": "Occlude", "bengali": "বন্ধ করে দেওয়া", "english": "shut; close" },
    { "id": 223, "word": "Officious", "bengali": "অনধিকার", "english": "meddlesome; excessively pushy in offering one's services" },
    { "id": 224, "word": "Onerous", "bengali": "গুরুভার", "english": "burdensome" },
    { "id": 225, "word": "Opprobrium", "bengali": "নিন্দা", "english": "infamy; vilification" },
    { "id": 226, "word": "Oscillate", "bengali": "স্পন্দিত হওয়া, দোদুল্যমান হওয়া", "english": "vibrate; waver" },
    { "id": 227, "word": "Ostentatious", "bengali": "জাঁকালো", "english": "showy; pretentious; trying to attract attention" },
    { "id": 228, "word": "Paragon", "bengali": "সম্পূর্ণতার আদর্শ", "english": "model of perfection" },
    { "id": 229, "word": "Partisan", "bengali": "দলীয়", "english": "one-sided; prejudiced; committed to a party" },
    { "id": 230, "word": "Pathological", "bengali": "আবেগপূর্ণ", "english": "pertaining to disease" },
    { "id": 231, "word": "Paucity", "bengali": "অভাব, ঘাটতি", "english": "Scarcity" },
    { "id": 232, "word": "Pedantic", "bengali": "গোঁড়া, স্কুল-শিক্ষকসুলভ", "english": "showing off learning; bookish" },
    { "id": 233, "word": "Penchant", "bengali": "পছন্দ", "english": "strong inclination; liking" },
    { "id": 234, "word": "Penury", "bengali": "স্বল্পতা", "english": "severe poverty; stinginess" },
    { "id": 235, "word": "Perennial", "bengali": "বহুবর্ষজীবী", "english": "something long-lasting" },
    { "id": 236, "word": "Perfidious", "bengali": "অবিশ্বাসী", "english": "treacherous; disloyal" },
    { "id": 237, "word": "Perfunctory", "bengali": "দ্রুতসম্পাদিত, অগভীর", "english": "superficial; not thorough; lacking interest, care, or enthusiasm" },
    { "id": 238, "word": "Permeable", "bengali": "ভেদ্য", "english": "penetrable; porous; allowing liquids or gas to pass through" },
    { "id": 239, "word": "Pervasive", "bengali": "পরিব্যাপক", "english": "spread throughout" },
    { "id": 240, "word": "Phlegmatic", "bengali": "জড", "english": "calm; not easily disturbed" },
    { "id": 241, "word": "Piety", "bengali": "ভক্তি", "english": "devoutness; reverence for God" },
    { "id": 242, "word": "Placate", "bengali": "শান্ত করা", "english": "pacify; conciliate" },
    { "id": 243, "word": "Plasticity", "bengali": "নমনীয়তা", "english": "ability to be molded" },
    { "id": 244, "word": "Platitude", "bengali": "মামুলি মন্তব্য", "english": "trite remark; commonplace statement" },
    { "id": 245, "word": "Plethora", "bengali": "আধিক্য", "english": "excess; overabundance" },
    { "id": 246, "word": "Plummet", "bengali": "ওলনদড়ি", "english": "fall sharply" },
    { "id": 247, "word": "Porous", "bengali": "ঝাঁজরা", "english": "full of pores; like a sieve" },
    { "id": 248, "word": "Pragmatic", "bengali": "রাষ্ট্রীয়", "english": "practical (as opposed to idealistic); concerned with the practical worth or impact of something" },
    { "id": 249, "word": "Preamble", "bengali": "প্রস্তাবনা", "english": "introductory statement" },
    { "id": 250, "word": "Precarious", "bengali": "নিরাপত্তাহীন", "english": "uncertain; risky" },
    { "id": 251, "word": "Precipitate", "bengali": "থিতান", "english": "rash, premature, hasty, sudden" },
    { "id": 252, "word": "Precursor", "bengali": "অগ্রদূত, ঘটনার পূর্বাভাস", "english": "forerunner" },
    { "id": 253, "word": "Presumptuous", "bengali": "অহংকারী", "english": "arrogant; taking liberties" },
    { "id": 254, "word": "Prevaricate", "bengali": "সত্যের অপলাপ করা", "english": "lie" },
    { "id": 255, "word": "Pristine", "bengali": "আদিম", "english": "characteristic of earlier times; primitive; unspoiled" },
    { "id": 256, "word": "Probity", "bengali": "সততা, ন্যায়পরতা", "english": "uprightness; incorruptibility" },
    { "id": 257, "word": "Problematic", "bengali": "সমস্যাযুক", "english": "doubtful; unsettled; questionable; perplexing" },
    { "id": 258, "word": "Prodigal", "bengali": "অপব্যযী", "english": "wasteful; reckless with money" },
    { "id": 259, "word": "Profound", "bengali": "গভীর", "english": "deep; not superficial; complete" },
    { "id": 260, "word": "Prohibitive", "bengali": "প্রতিষেধক", "english": "tending to prevent the purchase or use of something; inclined to prevent or forbid" },
    { "id": 261, "word": "Proliferate", "bengali": "প্রচুর সংখ্যায় স্বীয় বংশবৃদ্ধি করা", "english": "grow rapidly; spread; multiply" },
    { "id": 262, "word": "Propensity", "bengali": "প্রবণতা", "english": "natural inclination" },
    { "id": 263, "word": "Propitiate", "bengali": "শান্ত করা", "english": "Appease" },
    { "id": 264, "word": "Propriety", "bengali": "সম্পত্তি", "english": "fitness; correct conduct" },
    { "id": 265, "word": "Proscribe", "bengali": "নির্বাসিত করা", "english": "ostracize; banish; outlaw" },
    { "id": 266, "word": "Pungent", "bengali": "তীব্র কটু, কুটগন্ধ", "english": "stinging; sharp in taste or smell; caustic" },
    { "id": 267, "word": "Qualified", "bengali": "উপযুক্ত", "english": "limited; restricted" },
    { "id": 268, "word": "Quibble", "bengali": "টাল", "english": "minor objection or complaint" },
    { "id": 269, "word": "Quiescent", "bengali": "নিশ্চল", "english": "at rest; dormant; temporarily inactive" },
    { "id": 270, "word": "Rarefied", "bengali": "তনু", "english": "made less dense (of a gas)" },
    { "id": 271, "word": "Recalcitrant", "bengali": "বিরুপ", "english": "obstinately stubborn; determined to resist authority; unruly" },
    { "id": 272, "word": "Recant", "bengali": "প্রত্যাহার করা", "english": "disclaim or disavow; retract a previous statement; openly confess error" },
    { "id": 273, "word": "Recluse", "bengali": "নি:সঙ্গ", "english": "hermit; loner" },
    { "id": 274, "word": "Recondite", "bengali": "দুর্বোধ্য", "english": "abstruse; profound; secret" },
    { "id": 275, "word": "Refractory", "bengali": "অবাধ্য", "english": "stubborn; unmanageable" },
    { "id": 276, "word": "Refute", "bengali": "খণ্ডন", "english": "Disprove" },
    { "id": 277, "word": "Relegate", "bengali": "নির্বাসিত করা", "english": "banish to an inferior position; delegate; assign" },
    { "id": 278, "word": "Reproach", "bengali": "কলঙ্", "english": "express disapproval or disappointment" },
    { "id": 279, "word": "Reprobate", "bengali": "হীন ব্যকি", "english": "person hardened in sin; devoid of a sense of decency" },
    { "id": 280, "word": "Repudiate", "bengali": "পরিত্যাগ করা", "english": "disown; disavow" },
    { "id": 281, "word": "Rescind", "bengali": "বাতিল করা", "english": "Cancel" },
    { "id": 282, "word": "Resolution", "bengali": "সমাধান", "english": "Determination" },
    { "id": 283, "word": "Resolve", "bengali": "সমাধান করুন", "english": "determination; firmness of purpose" },
    { "id": 284, "word": "Reticent", "bengali": "স্বল্পভাষী", "english": "reserved; uncommunicative; inclined to silence" },
    { "id": 285, "word": "Reverent", "bengali": "ভক্তিপূর্ণ", "english": "respectful; worshipful" },
    { "id": 286, "word": "Sage", "bengali": "ঋষি, মহাজ্ঞানী", "english": "person celebrated for wisdom" },
    { "id": 287, "word": "Salubrious", "bengali": "স্বাস্থ্যকর", "english": "Healthful" },
    { "id": 288, "word": "Sanction", "bengali": "অনুমোদন", "english": "approve; ratify" },
    { "id": 289, "word": "Satiate", "bengali": "সম্পূর্ণ পরিতৃপ্ত করা", "english": "satisfy fully" },
    { "id": 290, "word": "Saturate", "bengali": "পরিপূর্ণ করা", "english": "soak thoroughly" },
    { "id": 291, "word": "Savor", "bengali": "গন্ধ", "english": "enjoy; have a distinctive flavor, smell, or quality" },
    { "id": 292, "word": "Secrete", "bengali": "লুকাইয়া রাখা", "english": "hide away or cache; produce and release a substance into an organism" },
    { "id": 293, "word": "Shard", "bengali": "খোলা", "english": "fragment, generally of pottery" },
    { "id": 294, "word": "Skeptic", "bengali": "সংশযী", "english": "doubter; person who suspends judgment until having examined evidence supporting a point of view" },
    { "id": 295, "word": "Solicitous", "bengali": "উজ্জ্বষ্ঠিত", "english": "worried; concerned" },
    { "id": 296, "word": "Soporific", "bengali": "নিদ্রাজনক, নিদ্রাকর্ষক", "english": "sleep-causing; marked by sleepiness" },
    { "id": 297, "word": "Specious", "bengali": "ভালো", "english": "seemingly reasonable but incorrect; misleading (often intentionally)" },
    { "id": 298, "word": "Spectrum", "bengali": "বর্ণালী", "english": "colored band produced when a beam of light passes through a prism" },
    { "id": 299, "word": "Sporadic", "bengali": "বিক্ষিপ্ত", "english": "occurring irregularly" },
    { "id": 300, "word": "Stigma", "bengali": "কলঙ্ক, কালি", "english": "token of disgrace; brand" },
    { "id": 301, "word": "Stint", "bengali": "সীমা", "english": "be thrifty; set limits" },
    { "id": 302, "word": "Stipulate", "bengali": "চুক্তির শর্ত করা", "english": "make express conditions; specify" },
    { "id": 303, "word": "Stolid", "bengali": "অবিচলিত, ভাবলেশহীন", "english": "dull; impassive" },
    { "id": 304, "word": "Striated", "bengali": "বিলেখিত", "english": "marked with parallel bands; grooved" },
    { "id": 305, "word": "Strut", "bengali": "বৃথা গর্বে বা আত্মগরিমায় গটগট করিয়া", "english": "pompous walk" },
    { "id": 306, "word": "Strut", "bengali": "ভাররক্ষা করা", "english": "supporting bar" },
    { "id": 307, "word": "Subpoena", "bengali": "সমন", "english": "writ summoning a witness to appear" },
    { "id": 308, "word": "Subside", "bengali": "হ্রাস পাওয়া", "english": "settle down; descend; grow quiet" },
    { "id": 309, "word": "Substantiate", "bengali": "বাস্তবায়িত করা", "english": "establish by evidence; verify; support" },
    { "id": 310, "word": "Supersede", "bengali": "সরাইয়া রাখা", "english": "cause to be set aside; replace; make obsolete" },
    { "id": 311, "word": "Supposition", "bengali": "অনুমান", "english": "hypothesis; surmise" },
    { "id": 312, "word": "Tacit", "bengali": "অকথিত, মৌন", "english": "understood; not put into words" },
    { "id": 313, "word": "Tangential", "bengali": "স্পর্শকতুল্য", "english": "peripheral; only slightly connected; digressing" },
    { "id": 314, "word": "Tenuous", "bengali": "অতি সূক্ষ্ম", "english": "thin; rare; slim" },
    { "id": 315, "word": "Tirade", "bengali": "সুদীর্ঘ বক্তৃতা", "english": "extended scolding; denunciation; harangue" },
    { "id": 316, "word": "Torpor", "bengali": "অস্পষ্টতা", "english": "lethargy; sluggishness; dormancy" },
    { "id": 317, "word": "Tortuous", "bengali": "কুটিল", "english": "winding; full of curves" },
    { "id": 318, "word": "Tractable", "bengali": "সহজে টানা যায় এমন", "english": "docile; easily managed" },
    { "id": 319, "word": "Transgression", "bengali": "পাপ", "english": "violation of a law; sin" },
    { "id": 320, "word": "Truculence", "bengali": "নিষ্ঠুরতা", "english": "aggressiveness; ferocity" },
    { "id": 321, "word": "Vacillate", "bengali": "আন্দোলিত হওয়া, দোলায়মান হওয়া", "english": "waver; fluctuate" },
    { "id": 322, "word": "Venerate", "bengali": "শ্রদ্ধা করা", "english": "revere" },
    { "id": 323, "word": "Veracious", "bengali": "সত্যবাদী, সত্যনিষ্ঠ", "english": "truthful" },
    { "id": 324, "word": "Verbose", "bengali": "শব্দবহুল, শব্দভারাক্রান্ত", "english": "wordy" },
    { "id": 325, "word": "Viable", "bengali": "টেকসই", "english": "practical or workable" },
    { "id": 326, "word": "Viscous", "bengali": "আঠালো চচ্চটে", "english": "sticky, gluey" },
    { "id": 327, "word": "Vituperative", "bengali": "গালাগালিপূর্ণ, নিন্দাপূর্ণ", "english": "abusive; scolding" },
    { "id": 328, "word": "Volatile", "bengali": "পরিবর্তনশীল", "english": "changeable; explosive; evaporation rapidly" },
    { "id": 329, "word": "Warranted", "bengali": "নিশ্চয় করিয়া বলা", "english": "justified; authorized" },
    { "id": 330, "word": "Wary", "bengali": "সতর্ক, সাবধান", "english": "very cautious" },
    { "id": 331, "word": "Welter", "bengali": "অশান্তি, টালমাটাল", "english": "turmoil; bewildering jumble" },
    { "id": 332, "word": "Whimsical", "bengali": "কিম্ভুতকিমাকার, খামখেয়ালী", "english": "capricious; fanciful" },
    { "id": 333, "word": "Zealot", "bengali": "অতি গোঁড়া লোক, ধর্মান্ধ", "english": "fanatic; person who shows excessive zeal" }
];

// --- 2. GLOBAL STATE ---
const WORDS_PER_CHUNK = 10;
const SAVE_KEY = 'gre333Progress'; // --- NEW ---
const DARK_MODE_KEY = 'gre333DarkMode'; // --- NEW ---
let currentChunkIndex = 0; 
let totalMasteredCount = 0;
let wordsInCurrentChunk = [];
let currentQuizQuestionIndex = 0;
let quizScores = { correct: 0, incorrect: 0 };
let missedWords = []; 
let isAnswered = false;

// --- 3. DOM ELEMENTS ---
const htmlElement = document.documentElement; // --- NEW ---
const sections = {
    welcome: document.getElementById('welcome-section'),
    learn: document.getElementById('learn-section'),
    test: document.getElementById('test-section'),
    results: document.getElementById('results-section'),
    dictionary: document.getElementById('dictionary-section') // --- NEW ---
};
const progressBarFill = document.getElementById('progress-bar-fill');
const progressBarText = document.getElementById('progress-bar-text');

// --- NEW: Header Buttons ---
const mainMenuButton = document.getElementById('main-menu-button');
const dictionaryButton = document.getElementById('dictionary-button');
const darkModeToggle = document.getElementById('dark-mode-toggle');
const darkIconMoon = document.getElementById('dark-icon-moon');
const darkIconSun = document.getElementById('dark-icon-sun');

// --- NEW: Welcome Screen Buttons ---
const startLearningButton = document.getElementById('start-learning-button');
const reviewMasteredButton = document.getElementById('review-mastered-button');
const resetProgressButton = document.getElementById('reset-progress-button');

// Learn
const learnHeader = document.getElementById('learn-header');
const learnContainer = document.getElementById('learn-container');
const startTestButton = document.getElementById('start-test-button');

// Test
const quizProgressText = document.getElementById('quiz-progress-text');
const quizProgressBar = document.getElementById('quiz-progress-bar');
const quizQuestion = document.getElementById('quiz-question');
const quizQuestionBengali = document.getElementById('quiz-question-bengali');
const quizOptionsContainer = document.getElementById('quiz-options-container');
const feedbackContainer = document.getElementById('quiz-feedback-container');
const feedbackText = document.getElementById('quiz-feedback-text');
const feedbackCorrectAnswer = document.getElementById('quiz-feedback-correct-answer');
const nextQuestionButton = document.getElementById('next-question-button');

// Results
const resultsHeader = document.getElementById('results-header');
const finalScoreText = document.getElementById('final-score-text');
const finalPercentageText = document.getElementById('final-percentage-text');
const wordsToReviewContainer = document.getElementById('words-to-review-container');
const wordsToReviewList = document.getElementById('words-to-review-list');
const continueButton = document.getElementById('continue-button');

// --- NEW: Dictionary ---
const searchBar = document.getElementById('search-bar');
const dictionaryListContainer = document.getElementById('dictionary-list-container');


// --- 4. CORE FUNCTIONS ---

/**
 * Switches the visible section
 * @param {string} sectionName - 'welcome', 'learn', 'test', 'results', 'dictionary'
 */
function showSection(sectionName) {
    Object.values(sections).forEach(section => {
        section.classList.remove('active');
    });
    if (sections[sectionName]) {
        sections[sectionName].classList.add('active');
        window.scrollTo(0, 0); // Scroll to top on section change
    }
}

/**
 * Pronounces the given word using Web Speech API
 * @param {string} word - The word to speak
 */
function speakWord(word) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = 'en-US'; 
        utterance.rate = 0.9;   
        window.speechSynthesis.speak(utterance);
    } else {
        console.warn("Browser does not support Speech Synthesis.");
    }
}

/**
 * Updates the main progress bar and review button
 */
function updateMainProgress() {
    const percentage = (totalMasteredCount / vocabList.length) * 100;
    progressBarFill.style.width = `${percentage}%`;
    progressBarText.textContent = `Mastered: ${totalMasteredCount} of 333 words`;

    // --- NEW: Update review button ---
    if (totalMasteredCount > 0) {
        reviewMasteredButton.textContent = `Review Mastered Words (${totalMasteredCount})`;
        reviewMasteredButton.style.display = 'block';
    } else {
        reviewMasteredButton.style.display = 'none';
    }
}

/**
 * Loads the Welcome/Main Menu screen
 */
function loadWelcome() {
    updateMainProgress();
    const nextChunkIndex = Math.floor(totalMasteredCount / WORDS_PER_CHUNK);
    const startWord = (nextChunkIndex * WORDS_PER_CHUNK) + 1;
    const endWord = Math.min(startWord + WORDS_PER_CHUNK - 1, vocabList.length);
    
    if (startWord > vocabList.length) {
        startLearningButton.textContent = "Congratulations! You've completed all lessons!";
        startLearningButton.disabled = true;
        startLearningButton.classList.add('bg-green-700', 'opacity-70');
    } else {
        startLearningButton.textContent = `Begin Lesson ${nextChunkIndex + 1} (Words ${startWord}-${endWord})`;
        startLearningButton.disabled = false;
        startLearningButton.classList.remove('bg-green-700', 'opacity-70');
    }
    
    showSection('welcome');
}

/**
 * Loads the Learn section for a specific chunk
 * @param {number} chunkIndex - The index of the chunk (0 = words 1-10)
 */
function loadLearnSection(chunkIndex) {
    currentChunkIndex = chunkIndex;
    const start = chunkIndex * WORDS_PER_CHUNK;
    const end = Math.min(start + WORDS_PER_CHUNK, vocabList.length);
    wordsInCurrentChunk = vocabList.slice(start, end);

    learnHeader.textContent = `Learning Set: Words ${start + 1}-${end}`;
    
    let html = '';
    wordsInCurrentChunk.forEach(word => {
        // --- UPDATED: Added dark mode classes ---
        html += `
        <div class="bg-white dark:bg-slate-800 p-5 rounded-lg shadow-md border border-slate-200 dark:border-slate-700">
            <div class="flex justify-between items-center mb-1">
                <h4 class="text-2xl font-bold text-indigo-800 dark:text-indigo-300">${word.id}. ${word.word}</h4>
                <button class="speak-button p-2 rounded-full text-indigo-600 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-slate-700 active:bg-indigo-200 dark:active:bg-slate-600 transition-colors" data-word="${word.word}" aria-label="Pronounce word">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                      <path d="M12 14a3 3 0 0 0 3-3V5a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3Z" />
                      <path d="M17 11a1 1 0 0 1 1 1v.5a6 6 0 0 1-12 0V12a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v.5a3 3 0 0 0 6 0V12a1 1 0 0 1 1-1h1Z" />
                    </svg>
                </button>
            </div>
            <p class="lang-bn text-xl text-slate-700 dark:text-slate-300 mb-2">${word.bengali}</p>
            <p class="text-md text-slate-500 dark:text-slate-400 italic">${word.english}</p>
        </div>
        `;
    });
    learnContainer.innerHTML = html;
    showSection('learn');
}

/**
 * Shuffles an array in place (Fisher-Yates)
 * @param {Array} array - The array to shuffle
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

/**
 * Starts the quiz for the current chunk (or review)
 */
function startTest() {
    shuffleArray(wordsInCurrentChunk);
    currentQuizQuestionIndex = 0;
    quizScores = { correct: 0, incorrect: 0 };
    missedWords = [];
    
    updateQuizStats();
    loadQuestion();
    showSection('test');
}

/**
 * Loads the current quiz question
 */
function loadQuestion() {
    if (currentQuizQuestionIndex >= wordsInCurrentChunk.length) {
        showQuizComplete();
        return;
    }

    isAnswered = false;
    feedbackContainer.style.display = 'none';
    quizOptionsContainer.innerHTML = '';
    quizQuestion.textContent = '';
    quizQuestionBengali.textContent = '';
    
    const currentWord = wordsInCurrentChunk[currentQuizQuestionIndex];
    
    const quizType = Math.random() > 0.5 ? 'word-to-def' : 'def-to-word';
    
    let question = '';
    let questionIsBengali = false;
    let correctAnswer = '';
    let options = [];

    if (quizType === 'word-to-def') {
        if (Math.random() > 0.5) {
            question = currentWord.word;
        } else {
            question = currentWord.bengali;
            questionIsBengali = true;
        }
        correctAnswer = currentWord.english;
        options.push(currentWord);
    } else { // def-to-word
        question = currentWord.english;
        correctAnswer = currentWord.word;
        options.push(currentWord);
    }

    // Get 3 random wrong answers
    let fullWordListForOptions = wordsInCurrentChunk.length > 4 ? wordsInCurrentChunk : vocabList;
    while (options.length < 4) {
        const randomWord = fullWordListForOptions[Math.floor(Math.random() * fullWordListForOptions.length)];
        if (!options.some(opt => opt.id === randomWord.id)) {
            options.push(randomWord);
        }
    }

    shuffleArray(options);
    
    if (questionIsBengali) {
        quizQuestionBengali.textContent = question;
    } else {
        quizQuestion.textContent = question;
    }
    
    options.forEach(option => {
        let text = (quizType === 'word-to-def') ? option.english : option.word;
        let isCorrect = (text === correctAnswer);
        createOptionButton(text, isCorrect);
    });

    updateQuizStats();
}

/**
 * Creates an option button for the quiz
 * @param {string} text - The text to display on the button
 * @param {boolean} isCorrect - Whether this is the correct answer
 */
function createOptionButton(text, isCorrect) {
    const button = document.createElement('button');
    button.dataset.correct = isCorrect;
    button.innerHTML = `<span class="font-medium">${text}</span>`;
    // --- UPDATED: Added dark mode classes ---
    button.className = "quiz-option-button w-full text-left p-4 bg-white dark:bg-slate-700 border-2 border-slate-200 dark:border-slate-600 rounded-lg shadow-sm hover:bg-slate-50 dark:hover:bg-slate-600 transition-all duration-150 text-lg dark:text-slate-100";
    
    button.addEventListener('click', () => checkAnswer(button));
    quizOptionsContainer.appendChild(button);
}

/**
 * Checks the selected answer
 * @param {HTMLButtonElement} selectedButton - The button that was clicked
 */
function checkAnswer(selectedButton) {
    if (isAnswered) return;
    isAnswered = true;

    const isCorrect = selectedButton.dataset.correct === 'true';
    const allButtons = quizOptionsContainer.querySelectorAll('button');
    const currentWord = wordsInCurrentChunk[currentQuizQuestionIndex];

    allButtons.forEach(button => {
        button.disabled = true;
        const correct = button.dataset.correct === 'true';
        if (correct) {
            // --- UPDATED: Added dark mode classes ---
            button.classList.remove('bg-white', 'dark:bg-slate-700', 'border-slate-200', 'dark:border-slate-600');
            button.classList.add('bg-green-100', 'dark:bg-green-900', 'border-green-500', 'dark:border-green-600', 'ring-2', 'ring-green-400');
        }
    });

    if (isCorrect) {
        quizScores.correct++;
        feedbackText.textContent = "Correct!";
        feedbackText.className = "text-2xl font-semibold text-green-600 dark:text-green-400";
        feedbackCorrectAnswer.textContent = '';
    } else {
        quizScores.incorrect++;
        missedWords.push(currentWord); 
        
        // --- UPDATED: Added dark mode classes ---
        selectedButton.classList.remove('bg-white', 'dark:bg-slate-700', 'border-slate-200', 'dark:border-slate-600');
        selectedButton.classList.add('bg-red-100', 'dark:bg-red-900', 'border-red-500', 'dark:border-red-600', 'ring-2', 'ring-red-400');
        
        feedbackText.textContent = "Incorrect";
        feedbackText.className = "text-2xl font-semibold text-red-600 dark:text-red-400";
        
        feedbackCorrectAnswer.textContent = `Correct: ${currentWord.word} (${currentWord.english})`;
    }

    currentQuizQuestionIndex++;
    updateQuizStats();
    feedbackContainer.style.display = 'block';
}

/**
 * Updates the (10-question) quiz progress bar
 */
function updateQuizStats() {
    const total = wordsInCurrentChunk.length;
    const progress = currentQuizQuestionIndex;
    
    quizProgressText.textContent = `Question ${Math.min(progress + 1, total)} of ${total}`;
    quizProgressBar.style.width = `${((progress) / total) * 100}%`; 
}

/**
 * Shows the quiz completion (Results) screen
 */
function showQuizComplete() {
    const total = wordsInCurrentChunk.length;
    const correct = quizScores.correct;
    const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;
    
    // --- UPDATED: Save progress IF this was a lesson (not a review) ---
    const isReview = wordsInCurrentChunk.length > WORDS_PER_CHUNK;
    if (!isReview) {
        if (percentage >= 80) { // If they pass
            totalMasteredCount = (currentChunkIndex + 1) * WORDS_PER_CHUNK;
        }
        totalMasteredCount = Math.min(totalMasteredCount, vocabList.length);
        
        // --- NEW: Save to localStorage ---
        localStorage.setItem(SAVE_KEY, totalMasteredCount);
        updateMainProgress();
    }
    
    // --- Update Results Card ---
    resultsHeader.textContent = isReview ? `Review Complete!` : `Lesson ${currentChunkIndex + 1} Complete!`;
    finalScoreText.textContent = `${correct} / ${total}`;
    finalPercentageText.textContent = `(${percentage}%)`;

    if (percentage >= 80) {
        finalScoreText.className = "text-7xl font-bold text-green-600 dark:text-green-400 my-4";
    } else if (percentage >= 50) {
        finalScoreText.className = "text-7xl font-bold text-yellow-600 dark:text-yellow-400 my-4";
    } else {
        finalScoreText.className = "text-7xl font-bold text-red-600 dark:text-red-400 my-4";
    }

    // --- Populate Corrective Feedback ---
    if (missedWords.length > 0) {
        let html = '';
        missedWords.forEach(word => {
            // --- UPDATED: Added dark mode classes ---
            html += `
            <div class="bg-red-50 dark:bg-slate-700 p-4 rounded-lg border border-red-200 dark:border-red-700">
                <div class="flex justify-between items-center mb-1">
                    <h4 class="text-xl font-bold text-red-800 dark:text-red-300">${word.word}</h4>
                    <button class="speak-button p-2 rounded-full text-red-700 dark:text-red-300 hover:bg-red-100 dark:hover:bg-slate-600" data-word="${word.word}" aria-label="Pronounce word">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                          <path d="M12 14a3 3 0 0 0 3-3V5a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3Z" />
                          <path d="M17 11a1 1 0 0 1 1 1v.5a6 6 0 0 1-12 0V12a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v.5a3 3 0 0 0 6 0V12a1 1 0 0 1 1-1h1Z" />
                        </svg>
                    </button>
                </div>
                <p class="lang-bn text-lg text-slate-700 dark:text-slate-300 mb-1">${word.bengali}</p>
                <p class="text-md text-slate-500 dark:text-slate-400 italic">${word.english}</p>
            </div>
            `;
        });
        wordsToReviewList.innerHTML = html;
        wordsToReviewContainer.style.display = 'block';
    } else {
        wordsToReviewList.innerHTML = '';
        wordsToReviewContainer.style.display = 'none';
    }
    
    // --- Configure Continue Button ---
    // If it was a review, button just goes to main menu.
    if (isReview) {
        continueButton.textContent = "Return to Main Menu";
        continueButton.onclick = () => loadWelcome();
    } else {
        // Original lesson logic
        let nextChunkIndex = currentChunkIndex;
        if (percentage < 80) {
            continueButton.textContent = `Retry Lesson ${currentChunkIndex + 1}`;
            continueButton.onclick = () => loadLearnSection(currentChunkIndex);
        } else {
            nextChunkIndex = currentChunkIndex + 1;
            const nextStartWord = nextChunkIndex * WORDS_PER_CHUNK;

            if (nextStartWord >= vocabList.length) {
                continueButton.textContent = "All Lessons Complete! Return to Menu";
                continueButton.onclick = () => loadWelcome();
            } else {
                const nextEndWord = Math.min(nextStartWord + WORDS_PER_CHUNK, vocabList.length);
                continueButton.textContent = `Continue to Lesson ${nextChunkIndex + 1} (Words ${nextStartWord + 1}-${nextEndWord})`;
                continueButton.onclick = () => loadLearnSection(nextChunkIndex);
            }
        }
    }
    
    showSection('results');
}

// --- 5. NEW FUNCTIONS ---

/**
 * --- NEW: Loads saved progress from localStorage
 */
function loadProgress() {
    const savedProgress = localStorage.getItem(SAVE_KEY);
    if (savedProgress) {
        totalMasteredCount = parseInt(savedProgress, 10);
    } else {
        totalMasteredCount = 0;
    }
    // This will call updateMainProgress and show the correct screen
    loadWelcome(); 
}

/**
 * --- NEW: Loads and populates the dictionary section
 */
function loadDictionary() {
    let html = '';
    vocabList.forEach(word => {
        // --- UPDATED: Use data-word for search and added dark mode classes ---
        html += `
        <div class="dictionary-word-card bg-white dark:bg-slate-800 p-5 rounded-lg shadow-md border border-slate-200 dark:border-slate-700" data-word="${word.word.toLowerCase()} ${word.bengali} ${word.english.toLowerCase()}">
            <div class="flex justify-between items-center mb-1">
                <h4 class="text-2xl font-bold text-indigo-800 dark:text-indigo-300">${word.id}. ${word.word}</h4>
                <button class="speak-button p-2 rounded-full text-indigo-600 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-slate-700" data-word="${word.word}" aria-label="Pronounce word">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                      <path d="M12 14a3 3 0 0 0 3-3V5a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3Z" />
                      <path d="M17 11a1 1 0 0 1 1 1v.5a6 6 0 0 1-12 0V12a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v.5a3 3 0 0 0 6 0V12a1 1 0 0 1 1-1h1Z" />
                    </svg>
                </button>
            </div>
            <p class="lang-bn text-xl text-slate-700 dark:text-slate-300 mb-2">${word.bengali}</p>
            <p class="text-md text-slate-500 dark:text-slate-400 italic">${word.english}</p>
        </div>
        `;
    });
    dictionaryListContainer.innerHTML = html;
}

/**
 * --- NEW: Filters the dictionary list based on search bar input
 */
function filterDictionary() {
    const searchTerm = searchBar.value.toLowerCase();
    const allWords = dictionaryListContainer.querySelectorAll('.dictionary-word-card');
    
    allWords.forEach(card => {
        const wordText = card.dataset.word;
        if (wordText.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

/**
 * --- NEW: Toggles dark mode
 */
function toggleDarkMode() {
    htmlElement.classList.toggle('dark');
    const isDarkMode = htmlElement.classList.contains('dark');
    localStorage.setItem(DARK_MODE_KEY, isDarkMode);
    updateDarkModeIcons(isDarkMode);
}

/**
 * --- NEW: Updates the dark mode icons
 * @param {boolean} isDarkMode
 */
function updateDarkModeIcons(isDarkMode) {
    if (isDarkMode) {
        darkIconMoon.classList.add('hidden');
        darkIconSun.classList.remove('hidden');
    } else {
        darkIconMoon.classList.remove('hidden');
        darkIconSun.classList.add('hidden');
    }
}

/**
 * --- NEW: Loads saved dark mode state
 */
function loadDarkModeState() {
    const isDarkMode = localStorage.getItem(DARK_MODE_KEY) === 'true';
    if (isDarkMode) {
        htmlElement.classList.add('dark');
    }
    updateDarkModeIcons(isDarkMode);
}

/**
 * --- NEW: Starts the review mode
 */
function startReviewMode() {
    const reviewWords = vocabList.slice(0, totalMasteredCount);
    if (reviewWords.length === 0) {
        alert("You haven't mastered any words yet!");
        return;
    }
    wordsInCurrentChunk = reviewWords;
    startTest();
}

/**
 * --- NEW: Resets all saved progress
 */
function resetProgress() {
    if (confirm("Are you sure you want to reset all your progress? This cannot be undone.")) {
        localStorage.removeItem(SAVE_KEY);
        totalMasteredCount = 0;
        loadWelcome();
    }
}


// --- 6. EVENT LISTENERS ---
document.addEventListener('DOMContentLoaded', () => {
    // --- UPDATED: Initial Load ---
    loadDarkModeState();
    loadProgress(); // This now handles the initial load and calls loadWelcome()
    loadDictionary(); // Pre-load the dictionary in the background
    
    // --- Navigation ---
    mainMenuButton.addEventListener('click', loadWelcome);
    dictionaryButton.addEventListener('click', () => showSection('dictionary'));
    darkModeToggle.addEventListener('click', toggleDarkMode);

    // --- Welcome Screen ---
    startLearningButton.addEventListener('click', () => {
        const nextChunkIndex = Math.floor(totalMasteredCount / WORDS_PER_CHUNK);
        loadLearnSection(nextChunkIndex);
    });
    reviewMasteredButton.addEventListener('click', startReviewMode);
    resetProgressButton.addEventListener('click', resetProgress);

    // --- Learn Section ---
    startTestButton.addEventListener('click', startTest);
    
    // --- Test Section ---
    nextQuestionButton.addEventListener('click', loadQuestion);

    // --- Dictionary ---
    searchBar.addEventListener('input', filterDictionary);

    // --- Global: Event Delegation for Speak Buttons ---
    document.body.addEventListener('click', function(event) {
        const speakButton = event.target.closest('.speak-button');
        if (speakButton) {
            const wordToSpeak = speakButton.dataset.word;
            if (wordToSpeak) {
                speakWord(wordToSpeak);
            }
        }
    });
});
