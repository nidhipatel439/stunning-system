import { StaticImageData } from "next/image";
import book1 from "../public/book1_elon.jpg";
import book2 from "../public/book2_john.jpg";
import book3 from "../public/book3_daniel.jpg";
import book4 from "../public/book4_robert.jpg";
import book5 from "../public/book5_warren.jpg";
import book6 from "../public/book6_thibaut.jpg";
import book7 from "../public/book7_ikigai.jpg";
import book8 from "../public/book8_ian.jpg";
import book9 from "../public/book9_michael.jpg";
import book10 from "../public/book10_robert.jpg";

export const book_data: {
    title: string;
    description: string;
    image: StaticImageData;
    amazon_link: string;
}[] = [
        {
            title: 'The Life, Lessons & Rules For Success',
            description: "The book is about how Musk' insistence on setting the standard rather than following everyone else in the traditional path, made him successful.Another remarkable thing about Musk and his life story, is his quest to find a greater purpose in what he is doing.Successful people never stop learning, and Musk is the best example of this characteristic.Great to read about Musk's life from 34000 USD to become Billionaire.",
            amazon_link: 'https://amzn.to/3snLzdl',
            image: book1
        },
        {
            title: 'The Power of Letting Go',
            description: "The Power of Letting Gobrings together a number of key principles that come up for anyone who is on the journey of self-enquiry and development. At some point, the choice becomes clear, whether to hold on or let go.For some, it''s easy, just do it, f**k it.For many others, there are multiple layers and obstacles that have built up through one''s life so far.This book combines both the why and the how to let go, with excellent practices that help convert the desire into action.",
            amazon_link: 'https://amzn.to/3vWcDRw',
            image: book2
        },
        {
            title: 'Thinking, Fast and Slow',
            description: "The book's main thesis is that of a dichotomy between two modes of thought:'System 1' is fast, instinctive and emotional; 'System 2' is slower, more deliberative, and more logical. The integrity of many of the priming studies cited in the book have been called into question in the midst of the psychological replication crisis, although the results of Kahneman's own studies have been replicated. The book was a New York Times bestseller[4] and won the 2012 winner of the National Academies Communication Award for best creative work that helps the public understanding of topics in behavioral science, engineering and medicine.",
            amazon_link: 'https://amzn.to/37OKC6K',
            image: book3
        },
        {
            title: 'The 48 Laws of Power',
            description: "The 48 Laws of Power (1998) is a non-fiction book by American author Robert Greene. The book is a New York Times bestseller, selling over 1.2 million copies in the United States, and is popular with prison inmates and celebrities.",
            amazon_link: 'https://amzn.to/39kcfVn',
            image: book4
        },
        {
            title: "The Warren Buffett Way: Investment Strategies of the World's Greatest Investor",
            description: "The runaway bestseller-updated with new material included for the first time! The Warren Buffett Way outlines his career and presents examples of how his investment techniques and methods evolved and the important individuals in that process. It also details the key investment decisions that produced his unmatched record of performance.",
            amazon_link: 'https://amzn.to/37UfVgn',
            image: book5
        },
        {
            title: 'Master Your Emotions: A Practical Guide to Overcome Negativity and Better Manage Your Feelings',
            description: "Struggling to let go of negative emotions? Discover a step-by-step process to living a happier, more fulfilling life. Weighed down by negativity? Are painful emotions keeping you from doing the things you love? Author and founder of WhatIsPersonalDevelopment.org Thibaut Meurisse wants to help you take back your life.",
            amazon_link: 'https://amzn.to/3vVzFIf',
            image: book6
        },
        {
            title: 'Ikigai: The Japanese Secret to a Long and Happy Life',
            description: "The people of Japan believe that everyone has an ikigai – a reason to jump out of bed each morning. And according to the residents of the Japanese island of Okinawa – the world’s longest-living people – finding it is the key to a longer and more fulfilled life. Inspiring and comforting, this book will give you the life-changing tools to uncover your personal ikigai.",
            amazon_link: 'https://amzn.to/3LwR68S',
            image: book7
        },
        {
            title: 'The Power of Mental Discipline',
            description: "Create the life of your dreams. Break your old habits, become unstoppable and dominate your life!Imagine – your life as a blank slate. You can choose what you want it to look like. Like a video game, you can fill it with whatever you like!",
            amazon_link: 'https://amzn.to/3LwRyE6',
            image: book8
        },
        {
            title: 'The First 90 Days: Critical Success Strategies for New Leaders at All Levels',
            description: "Since its original release, The First 90 Days has become the bestselling globally acknowledged bible of leadership and career transitions. In this updated and expanded 10th anniversary edition, internationally known leadership transition expert Michael D. Watkins gives you the keys to successfully negotiating your next move—whether you’re onboarding into a new company, being promoted internally, or embarking on an international assignment.",
            amazon_link: 'https://amzn.to/39r30Tz',
            image: book9
        },
        {
            title: 'Rich Dad, Poor Dad',
            description: "Rich Dad Poor Dad is Robert's story of growing up with two dads — his real father and the father of his best friend, his'rich dad' — and the ways in which both men shaped his thoughts about money and investing. The book explodes the myth that you need to earn a high income to be rich and explains the difference between working for money and having your money work for you.",
            amazon_link: 'https://amzn.to/3koj4Ye',
            image: book10
        },

    ];