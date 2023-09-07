export default interface project {
  title: string;
  image: string;
  description: string;
}

//fill with project data so I can use it in the carousel

export const projectData: project[] = [
    {
        title: "Blockchain Buddy",
        image: "temp-image-url",
        description: "Designed and developed a front-end using JavaScript, React.js, and Bootstrap CSS. Designed and developed a blockchain based back-end using Ether.js, Ethereum and Solidity Smart Contracts. Engineered zero-knowledge proof based protocol for secure information transfer. Won Capital One’s Cyber Imperative Challenge, Won Third Place in MITRE: Building Web 3 Challenge.\nAug 2019 – May 2023"
    },
    {
        title: "NASA SEE Event",
        image: "temp-image-url",
        description: "Designed and developed front-end using Figma, JavaScript, React.js, and Bootstrap CSS. Developed cloud based back-end on AWS infrastructure following REST protocols in Python and TypeScript. Automated VPN key creation process and registration process that was originally done manually. Hosted on AWS S3 Bucket and used for NASA's SEE event.\nSep 2022 – Feb 2023"
    },
    {
        title: "Better Call GPT",
        image: "temp-image-url",
        description: "Designed and developed back-end using Node.js, Express.js, and Chat-GPT API. Utilized Weaviate vector database to create an app that could analyze legal cases and create documents with the context of legal cases.\nMay 2023"
    },
    {
        title: "MeDT",
        image: "temp-image-url",
        description: "Developed the front end using Angular.js and Bootstrap CSS. Engineered a test bed for testing the suite of the application using Karma CLI and Jasmine Framework. Conducted predictive analytics on machine throughput, downtime, and expected mechanical faults."
    },
];
