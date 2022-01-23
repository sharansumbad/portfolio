
import profile from './profile.png';
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
	name: "Sharanbasav",
	links: [
		{
			title: "About",
			link: "#about",
		},
		{
			title: "Projects",
			link: "#projects",
		},
		{
			title: "Contact",
			link: "#contact",
		},
		{
			title: "Links",
			link: "/links",
		},
	],
}
export const intro = {
	title: "Hey, I'm Sharanbasav",
	description: " A Data Enthusiast and an ardent Data Scientist with excellent knowledge in Machine Learning Algorithms and Strong Business Sense. Innovative and analytically minded with Data science experience to bring to the table.",
	image: profile.src,
	buttons: [
		{
			title: "Contact Me",
			link: "#contact",
			isPrimary: true,
		},
		{
			title: "Resume",
			link: "https://drive.google.com/file/d/1u4TlBZGiVL_rlISD8XMtvqsihFwnxFmh/view?usp=sharing",
			isPrimary: false,
		},
	],
}

export const about = {
	title: "About Me ",
	description: [
		"Presently working as a Data Science intern in the R&D team at an Indianapolis-based startup The Bee Corp, Here I assist to create technologies to help beekeepers in maximizing pollination revenue per hive, as well as to assist farmers in lowering costs and improving pollination quality. An application Called  Verifli , a hive grading system that is both fair and objective. With the widespread use of knowledge in data analysis and modeling, as well as the refinement of current algorithms and the development of new algorithms for use in products,Being a Machine learning buff and data-driven technology fanatic, I am a team-oriented person with fluent communication skills. Pursuing a master’s degree focused on Data Science and Graduate Researcher experience at Indiana University-Bloomington, I offer exceptional abilities in Machine Learning, Time Series Analysis, NLP, Deep Learning, Computer Vision, Data Analysis, Database Systems, and Statistical Analysis. ",
		" Apart from that I enjoy Photography , an avid Reader of Non-Fiction , Love Meditating and also Coffee and Conversations.",
	],
}

export const work = {
	title: "What I do",
	cards: [
		{
			title: "Data Science Intern @ The Bee Corp",
			description: "Data analysis and modeling, refining algorithms of the existing products, and developing new algorithms to be used in products",
			icons: null,
		},
		{
			title: "Graduate Research Assistant @ Indiana University University-Bloomington ",
			description: "Develope python functions emulating anonymized data of Norway tax returns from Statistical office of Norway, determine the  key areas influencing reliable measure of consumption of Norway population and Design the  python functions into Juli to increase  computation runtime of the functions",
			icons: null,
		}
	],
}

export const projects = {
	title: "Projects",
	cards: [
		{
			title: "Ethereum Price Prediction using sentiment Analysis",
			description: "Performed VADAR Sentiment Analysis on the Comments data from the Sub reddit Ethereum after data preprocessing and obtained the time series data with the Sentiment Polarity of the comments of 180 days to forecast the Ethereum Prices.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/sharansumbad/Ethereum-Price-prediction-SentimentAnalyis",
				},
			]
		},
		{
			title: "Chicago Crime Analysis in Spark and R ",
			description: "Extracted data using the Big Query API with 7.4 million records and 22 columns to analyze in Spark and perform Exploratory Data Analysis in R.	Executed Large Scale Analysis of the Crime data from 2001-2021 using spark data frame to prepare the data for modeling purpose.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/sharansumbad/Chicago-Crime-BIG-DATA-Analysis",
				},
			]
		},
		{
			title: "Calsssification of Tweets",
			description: "	Utilized unstructured text data and developed python functions to shape the data to feed into formulated Naïve Bayes machine learning model for classification of texts and calculate accuracy.The refined predictive model had an increased accuracy from 70.6% to 84.3% as compared to the classical Naïve Byes method available in the SciKitLearn library.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/sharansumbad/Calsssification-of-Tweets",
				},
			]
		},
	],
}

export const contact = {
	title: "Get in touch",
	description: "Books and Coffee Conversations are my thing.We can have a chat over any new ideas , Books or Music (or food) Feel free to reach out to me by email at sharanbasav.sumbad@gmail.com",
	buttons: [
		{
			title: "Email Me",
			link: "mailto:sharanbasav.sumbad@gmail.com",
			isPrimary: true,
		},
	]
}

// SEARCH ENGINE 
export const SEO = {
	// 50 - 60 char  
	title: "Sharanbasav Sumbad | Data Scientist | Photographer | Avid Reader",
	description: "Pursuing a master’s degree focused on Data Science and Graduate Researcher experience at Indiana University-Bloomington, I offer exceptional abilities in Machine Learning, Time Series Analysis, NLP, Deep Learning, Computer Vision, Data Analysis, Database Systems, and Statistical Analysis.",
	image: profile.src,
}

export const links = {
	image: profile.src,
	title: "@sharanbasav",
	description: "Data Scientist | Machine Learning  | Photographer ",
	cards: [
		{
			title: "Resume",
			link: "https://drive.google.com/file/d/1u4TlBZGiVL_rlISD8XMtvqsihFwnxFmh/view?usp=sharing",
		},
		{
			title: "My GitHub",
			link: "https://github.com/sharansumbad",
		},
		{
			title: "My LinkedIn",
			link: "http://www.linkedin.com/in/sharanbasav",
		},
	]
}