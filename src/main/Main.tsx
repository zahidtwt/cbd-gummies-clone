import { useEffect, useState } from "react";
import MainLeftContent from "../components/MainLeftContent/MainLeftContent";
import PaymentInfoPart from "../components/PaymentInfoPart/PaymentInfoPart";
import "./main.css";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

export interface IProduct {
  id: number;
  heading: string;
  gummiesImage: string;
  showSavePrice: boolean;
  savePrice: string;
  title: string;
  retailPrice: string;
  promoPrice: string;
  retailPricePerBottle: string;
  promoPricePerBottle: string;
  showTimeLeft?: boolean;
}

const productList: IProduct[] = [
  {
    id: 3,
    heading: "Buy 4 Get 4 Free",
    gummiesImage: "./assets/Gummies/greenapple_gummy_bag_pc.png",
    showSavePrice: true,
    savePrice: "$174.77",
    title: "Indead of 6 motnh cbd relief pack >> 28g Premium THCA Flower",
    retailPrice: "$399.76", //399.76
    promoPrice: "$224.99", //399.76
    retailPricePerBottle: "$49.97",
    promoPricePerBottle: "$28.12",
    showTimeLeft: true,
  },
  {
    id: 2,
    heading: "Buy 2 Get 2 Free",
    gummiesImage: "./assets/Gummies/strawberry_gummy_bag_pc.png",
    showSavePrice: true,
    savePrice: "$54.89",
    title: "Indead of 4 motnh cbd relief pack >> 14g Premium THCA Flower",
    retailPrice: "$199.88",
    promoPrice: "$144.99", //399.76
    retailPricePerBottle: "$49.97",
    promoPricePerBottle: "$36.25",
    showTimeLeft: false,
  },
  {
    id: 1,
    heading: "Buy 1 Get 1 Free",
    gummiesImage: "./assets/Gummies/watermelon_gummy_bag_pc.png",
    showSavePrice: false,
    savePrice: "24.95",
    title: "Indead of 2 motnh cbd relief pack >> 7g Premium THCA Flower",
    retailPrice: "$99.94",
    promoPrice: "$74.99", //399.76
    retailPricePerBottle: "$49.97",
    promoPricePerBottle: "$37.50",
    showTimeLeft: false,
  },
];

const moods = [
  {
    title: "Happy Blend",
    color: "bg-[#c11f50]",
    textColor: "text-white",
    fontFamily: "font-poppins",
  },
  {
    title: "Relax Blend",
    color: "bg-[#4571cb]",
    textColor: "text-white",
    fontFamily: "font-relax",
  },
  {
    title: "Energy Blend",
    color: "bg-[#634496]",
    textColor: "text-white",
    fontFamily: "font-energy",
  },
];

const customerFirst = [
  "Liam",
  "Emma",
  "Noah",
  "Olivia",
  "William",
  "Ava",
  "James",
  "Isabella",
  "Logan",
  "Sophia",
  "Benjamin",
  "Mia",
  "Mason",
  "Charlotte",
  "Elijah",
  "Amelia",
  "Oliver",
  "Evelyn",
  "Jacob",
  "Abigail",
  "Lucas",
  "Harper",
  "Michael",
  "Emily",
  "Alexander",
  "Elizabeth",
  "Ethan",
  "Avery",
  "Daniel",
  "Sofia",
  "Matthew",
  "Ella",
  "Aiden",
  "Madison",
  "Henry",
  "Scarlett",
  "Joseph",
  "Victoria",
  "Jackson",
  "Aria",
  "Samuel",
  "Grace",
  "Sebastian",
  "Chloe",
  "David",
  "Camila",
  "Carter",
  "Penelope",
  "Wyatt",
  "Riley",
  "Jayden",
  "Layla",
  "John",
  "Lillian",
  "Owen",
  "Nora",
  "Dylan",
  "Zoey",
  "Luke",
  "Mila",
  "Gabriel",
  "Aubrey",
  "Anthony",
  "Hannah",
  "Isaac",
  "Lily",
  "Grayson",
  "Addison",
  "Jack",
  "Eleanor",
  "Julian",
  "Natalie",
  "Levi",
  "Luna",
  "Christopher",
  "Savannah",
  "Joshua",
  "Brooklyn",
  "Andrew",
  "Leah",
  "Lincoln",
  "Zoe",
  "Mateo",
  "Stella",
  "Ryan",
  "Hazel",
  "Jaxon",
  "Ellie",
  "Nathan",
  "Paisley",
  "Aaron",
  "Audrey",
  "Isaiah",
  "Skylar",
  "Thomas",
  "Violet",
  "Charles",
  "Claire",
  "Caleb",
  "Bella",
  "Josiah",
  "Aurora",
  "Christian",
  "Lucy",
  "Hunter",
  "Anna",
  "Eli",
  "Samantha",
  "Jonathan",
  "Caroline",
  "Connor",
  "Genesis",
  "Landon",
  "Aaliyah",
  "Adrian",
  "Kennedy",
  "Asher",
  "Kinsley",
  "Cameron",
  "Allison",
  "Leo",
  "Maya",
  "Theodore",
  "Sarah",
  "Jeremiah",
  "Madelyn",
  "Hudson",
  "Adeline",
  "Robert",
  "Alexa",
  "Easton",
  "Ariana",
  "Nolan",
  "Elena",
  "Nicholas",
  "Gabriella",
  "Ezra",
  "Naomi",
  "Colton",
  "Alice",
  "Angel",
  "Sadie",
  "Brayden",
  "Hailey",
  "Jordan",
  "Eva",
  "Dominic",
  "Emilia",
  "Austin",
  "Autumn",
  "Ian",
  "Quinn",
  "Adam",
  "Nevaeh",
  "Elias",
  "Piper",
  "Jaxson",
  "Ruby",
  "Greyson",
  "Serenity",
  "Jose",
  "Willow",
  "Ezekiel",
  "Everly",
  "Carson",
  "Cora",
  "Evan",
  "Kaylee",
  "Maverick",
  "Lydia",
  "Bryson",
  "Aubree",
  "Jace",
  "Arianna",
  "Cooper",
  "Eliana",
  "Xavier",
  "Peyton",
  "Parker",
  "Melanie",
  "Roman",
  "Gianna",
  "Jason",
  "Isabelle",
  "Santiago",
  "Julia",
  "Chase",
  "Valentina",
  "Sawyer",
  "Nova",
  "Gavin",
  "Clara",
  "Leonardo",
  "Vivian",
  "Kayden",
  "Reagan",
  "Ayden",
  "Mackenzie",
  "Jameson",
  "Madeline",
  "Noah",
  "William",
  "James",
  "Logan",
  "Benjamin",
  "Mason",
  "Elijah",
  "Oliver",
  "Jacob",
  "Lucas",
  "Michael",
  "Alexander",
  "Ethan",
  "Daniel",
  "Matthew",
  "Aiden",
  "Henry",
  "Joseph",
  "Jackson",
  "Samuel",
  "Sebastian",
  "David",
  "Carter",
  "Wyatt",
  "Jayden",
  "John",
  "Owen",
  "Dylan",
  "Luke",
  "Gabriel",
  "Anthony",
  "Isaac",
  "Grayson",
  "Jack",
  "Julian",
  "Levi",
  "Christopher",
  "Joshua",
  "Andrew",
  "Lincoln",
  "Mateo",
  "Ryan",
  "Jaxon",
  "Nathan",
  "Aaron",
  "Isaiah",
  "Thomas",
  "Charles",
  "Caleb",
  "Josiah",
  "Christian",
  "Hunter",
  "Eli",
  "Jonathan",
  "Connor",
  "Landon",
  "Adrian",
  "Asher",
  "Cameron",
  "Leo",
  "Theodore",
  "Jeremiah",
  "Hudson",
  "Robert",
  "Easton",
  "Nolan",
  "Nicholas",
  "Ezra",
  "Colton",
  "Angel",
  "Brayden",
  "Jordan",
  "Dominic",
  "Austin",
  "Ian",
  "Adam",
  "Elias",
  "Jaxson",
  "Greyson",
  "Jose",
  "Ezekiel",
  "Carson",
  "Evan",
  "Maverick",
  "Bryson",
  "Jace",
  "Cooper",
  "Xavier",
  "Parker",
  "Roman",
  "Jason",
  "Santiago",
  "Chase",
  "Sawyer",
  "Gavin",
  "Leonardo",
  "Kayden",
  "Ayden",
  "Jameson",
  "Kevin",
  "Bentley",
  "Zachary",
  "Everett",
  "Axel",
  "Tyler",
  "Micah",
  "Vincent",
  "Weston",
  "Miles",
  "Wesley",
  "Nathaniel",
  "Harrison",
  "Brandon",
  "Cole",
  "Declan",
  "Luis",
  "Braxton",
  "Damian",
  "Silas",
  "Tristan",
  "Ryder",
  "Bennett",
  "George",
  "Emmett",
  "Justin",
  "Kai",
  "Max",
  "Diego",
  "Luca",
  "Ryker",
  "Carlos",
  "Maxwell",
  "Kingston",
  "Ivan",
  "Maddox",
  "Juan",
  "Ashton",
  "Jayce",
  "Rowan",
  "Kaiden",
  "Giovanni",
  "Eric",
  "Jesus",
  "Calvin",
  "Abel",
  "King",
  "Camden",
  "Amir",
  "Blake",
  "Alex",
  "Brody",
  "Malachi",
  "Emmanuel",
  "Jonah",
  "Beau",
  "Jude",
  "Antonio",
  "Alan",
  "Elliott",
  "Elliot",
  "Waylon",
  "Xander",
  "Timothy",
  "Victor",
  "Bryce",
  "Finn",
  "Brantley",
  "Edward",
  "Abraham",
  "Patrick",
];
const customerLast = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const customerStates = [
  "AL",
  "AK",
  "AZ",
  "AR",
  "CA",
  "CO",
  "CT",
  "DE",
  "FL",
  "GA",
  "HI",
  "ID",
  "IL",
  "IN",
  "IA",
  "KS",
  "KY",
  "LA",
  "ME",
  "MD",
  "MA",
  "MI",
  "MN",
  "MS",
  "MO",
  "MT",
  "NE",
  "NV",
  "NH",
  "NJ",
  "NM",
  "NY",
  "NC",
  "ND",
  "OH",
  "OK",
  "OR",
  "PA",
  "RI",
  "SC",
  "SD",
  "TN",
  "TX",
  "UT",
  "VT",
  "VA",
  "WA",
  "WV",
  "WI",
  "WY",
];
const customerQuantities = ["2", "3", "5"];

const Main = () => {
  const { toast } = useToast();
  const modalData = localStorage.getItem("isTakenFromModalData");

  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(
    window.innerWidth > 1024 ? productList[0] : null
  );
  const [step, setStep] = useState(1);
  const [isMobile] = useState(window.innerWidth < 1024);
  const [timeLeft, setTimeLeft] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(!modalData);

  const updateSelectProduct = (data: IProduct) => {
    setSelectedProduct(data);
    setStep(2);
  };

  const updateSocial = () => {
    const rCustomerFirst =
      customerFirst[Math.floor(Math.random() * customerFirst.length)];
    const rCustomerLast =
      customerLast[Math.floor(Math.random() * customerLast.length)];
    const rStates =
      customerStates[Math.floor(Math.random() * customerStates.length)];
    const rQuantities =
      customerQuantities[Math.floor(Math.random() * customerQuantities.length)];
    const rAgo = Math.floor(Math.random() * 21) + 1;

    return {
      firstName: rCustomerFirst,
      lastName: rCustomerLast,
      state: rStates,
      quantity: rQuantities,
      ago: `${rAgo} minutes ago`,
    };
  };

  useEffect(() => {
    if (window.innerWidth < 1024) return;

    const intervalId = setInterval(() => {
      const customer = updateSocial();

      toast({
        duration: 4000,
        description: (
          <div className="flex items-center justify-center gap-4">
            <img
              className="w-16 h-auto"
              src="product-fakesale.png"
              alt="Product"
            />
            <div className="custom-notification-content-wrapper">
              <p className="custom-notification-content">
                <span id="notify-customer">
                  {customer.firstName} {customer.lastName}
                </span>
                . -<span id="notify-state">{customer.state}</span>
                <br />
                Purchased
                <strong>
                  <span id="notify-quantity">{customer.quantity}</span>
                </strong>{" "}
                Bottle(s) of TranquilVibe CBD Gummies{" "}
                <small>
                  <span id="notify-ago">{customer.ago}</span>
                </small>
              </p>
            </div>
          </div>
        ),
      });
    }, 10000);

    return () => clearInterval(intervalId);
  }, [toast]);

  useEffect(() => {
    const timeout = 15;
    const countDownDate = new Date();
    countDownDate.setMinutes(countDownDate.getMinutes() + timeout);
    const timestamp = countDownDate.getTime();

    if (localStorage.getItem("timestamp") == null) {
      localStorage.setItem("timestamp", timestamp.toString());
    }

    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const distance = parseInt(localStorage.getItem("timestamp") || "0") - now;
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(intervalId);
        setTimeLeft("Expired");
      } else {
        setTimeLeft(
          `${minutes < 10 ? "0" + minutes : minutes}:${
            seconds < 10 ? "0" + seconds : seconds
          }`
        );
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="max-w-screen main main-bg-image font-poppins text-[14px] leading-4 p-5 lg:p-0">
      <header>
        <p className="text-center text-sm pt-6 lg:pt-0 pl-14 lg:pl-0 pb-3 lg:pb-0">
          <span className="text-[#f00]">Warning:</span> Due to extremely high
          media demand, there is limited supply of TranquilVibe CBD Gummies in
          stock as of <span className="text-[#f00]">HURRY! {timeLeft}</span>
        </p>
      </header>

      <div className="w-full flex justify-center">
        <div className="max-w-[1000px]">
          <section className="w-full flex justify-between items-center py-6 flex-col lg:flex-row">
            <div className="">
              <img className="w-[101px]" src="logo@2x.png" />
            </div>
            {/* desktop */}
            <div className="items-center justify-end gap-2 hidden lg:flex">
              <img className="w-[148px]" src="ca2.svg" />
              <p className="">
                Internet Exclusive Offers <br /> Available to USA Residents Only
              </p>
            </div>

            {/* mobile */}
            <div className="items-center justify-end gap-2 flex lg:hidden">
              <img className="w-[36px]" src="shipping.svg" />

              <p className="">
                <b>Fast, Free Shipping</b> For A Limited Time
              </p>
            </div>
          </section>

          <main className="lg:flex gap-4">
            {(!isMobile || (isMobile && step === 1)) && (
              <div className="w-full lg:w-[68%] ">
                <MainLeftContent
                  productList={productList}
                  selectedProduct={selectedProduct}
                  setSelectedProduct={updateSelectProduct}
                  timeLeft={timeLeft}
                />
              </div>
            )}

            {(!isMobile || (isMobile && step === 2)) && (
              <div className="w-full lg:w-[32%]">
                <PaymentInfoPart />
              </div>
            )}
          </main>

          <p className="text-center mb-10">
            *The statements made on our websites have not been evaluated by the
            FDA (U.S. Food & Drug Administration). Our products are not intended
            to diagnose, cure or prevent any disease. The information provided
            by this website or this company is not a substitute for a
            face-to-face consultation with your physician, and should not be
            construed as individual medical advice. The testimonials on this
            website are individual cases and do not guarantee that you will get
            the same results. Due to the nature of this product and to protect
            the privacy of the individuals, actual names and photographs of the
            individuals depicted in the testimonials have been changed.
            Individuals are remunerated.
          </p>
          <p className="text-center mb-10">
            © TranquilVibe CBD Gummies. All Rights Reserved.
          </p>
        </div>
      </div>

      <Dialog
        open={isModalOpen}
        onOpenChange={() => {
          setIsModalOpen(false);
        }}
      >
        {/* <DialogTrigger>Open</DialogTrigger> */}
        <DialogContent className="w-full lg:max-w-4xl">
          <DialogHeader>
            <DialogTitle>Select Your Mood</DialogTitle>
            {/* <DialogClose className="hidden" /> */}
            <DialogDescription className="w-full">
              <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-4 pt-4">
                {moods.map((mood, index) => (
                  <div
                    onClick={() => {
                      setIsModalOpen(false);
                      // localStorage.setItem("isTakenFromModalData", "true");
                    }}
                    key={index}
                    className={`${mood.color} rounded-lg shadow-lg w-64 h-36 flex items-center justify-center cursor-pointer`}
                  >
                    <h2
                      className={`text-2xl font-bold ${mood.textColor} ${mood.fontFamily}`}
                    >
                      <i>{mood.title}</i>
                    </h2>
                  </div>
                ))}
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Main;
