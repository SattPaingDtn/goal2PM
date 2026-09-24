import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Google PM Study Notes",
  description: "Google Project Management Certificate - Burmese Notes & Vocabulary Bank",
  base: process.env.BASE_PATH || '/',
  lastUpdated: true,
  cleanUrls: true,

  head: [
    ['link', { rel: 'icon', href: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">📊</text></svg>' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+Myanmar:wght@400;500;600;700&family=Padauk:wght@400;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap', rel: 'stylesheet' }]
  ],

  themeConfig: {
    logo: { text: '🚀 Goal2PM' },
    siteTitle: 'Goal2PM',

    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: 'ရှာဖွေရန် (Search)',
                buttonAriaLabel: 'Search'
              },
              modal: {
                noResultsText: 'ရှာမတွေ့ပါ',
                resetButtonTitle: 'ပြန်ရှင်းရန်',
                footer: {
                  selectText: 'ရွေးချယ်ရန်',
                  navigateText: 'ရွှေ့ရန်'
                }
              }
            }
          }
        }
      }
    },

    nav: [
      { text: 'ပင်မစာမျက်နှာ (Home)', link: '/' },
      { text: 'Course 1: Foundations', link: '/course-1-foundations/' },
      { text: 'Vocabulary Bank (ဝေါဟာရဘဏ်)', link: '/vocabulary/' },
      { text: 'Deploy Guide', link: '/guide/deploy' }
    ],

    sidebar: {
      '/course-1-foundations/': [
        {
          text: 'Course 1: Foundations of PM',
          items: [
            { text: '📌 သင်ရိုးလမ်းညွှန် (Course Overview)', link: '/course-1-foundations/' },
            {
              text: 'Module 1: Embarking on a Career in PM',
              collapsed: false,
              items: [
                { text: 'Module 1 Overview', link: '/course-1-foundations/module-1/' },
                { text: '1.0 Welcome to Google PM', link: '/course-1-foundations/module-1/lesson-0-welcome-to-google-pm' },
                { text: '1.1 Program & Course Overview', link: '/course-1-foundations/module-1/lesson-1-program-and-course-overview' },
                { text: '1.2 Introduction to Course 1', link: '/course-1-foundations/module-1/lesson-2-introduction-to-course-1' },
                { text: '1.3 Helpful Resources', link: '/course-1-foundations/module-1/lesson-3-helpful-resources-to-get-started' },
                { text: '1.4 What is Project Management?', link: '/course-1-foundations/module-1/lesson-4-what-is-project-management' },
                { text: '1.5 What Does a PM Do?', link: '/course-1-foundations/module-1/lesson-5-what-does-a-project-manager-do' },
                { text: '1.6 Transferable PM Skills', link: '/course-1-foundations/module-1/lesson-6-transferable-project-management-skills' },
                { text: '1.7 Path to Becoming a PM (X)', link: '/course-1-foundations/module-1/lesson-7-x-path-to-becoming-a-project-manager' },
                { text: '1.8 From Certificate to Career Success', link: '/course-1-foundations/module-1/lesson-8-from-certificate-to-career-success' },
                { text: '1.9 Explore PM Roles', link: '/course-1-foundations/module-1/lesson-9-explore-project-management-roles' },
              ]
            },
            {
              text: 'Module 2: Becoming an Effective PM',
              collapsed: true,
              items: [
                { text: 'Module 2 Overview', link: '/course-1-foundations/module-2/' },
              ]
            },
            {
              text: 'Module 3: Project Life Cycle & Methodologies',
              collapsed: true,
              items: [
                { text: 'Module 3 Overview', link: '/course-1-foundations/module-3/' },
              ]
            },
            {
              text: 'Module 4: Organizational Structure & Culture',
              collapsed: true,
              items: [
                { text: 'Module 4 Overview', link: '/course-1-foundations/module-4/' },
              ]
            }
          ]
        }
      ],
      '/vocabulary/': [
        {
          text: 'Vocabulary & Terminology',
          items: [
            { text: '📚 Master Vocabulary Bank', link: '/vocabulary/' }
          ]
        }
      ],
      '/guide/': [
        {
          text: 'Anytime & Anywhere Access',
          items: [
            { text: '🌐 Website Deployment Guide', link: '/guide/deploy' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com' }
    ],

    footer: {
      message: 'Google Project Management Learning Journey with Burmese Notes',
      copyright: 'Goal2PM © 2026'
    },

    docFooter: {
      prev: 'ယခင် သင်ခန်းစာ (Previous)',
      next: 'နောက် သင်ခန်းစာ (Next)'
    }
  }
})
