# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
Subscriber.create(first_name: 'don', last_name: 'denoncourt', email: 'dondenoncourt@gmail.com')
Subscriber.create(first_name: 'Suzanne', last_name: 'Denoncourt', email: 'suzannerdenoncourt@gmail.com')

Publishment.create(title: 'Our Boring Chickens: Hatchet, Quarter, and Ghost', link: 'https://medium.com/@dondenoncourt/our-boring-chickens-hatchet-quarter-and-ghost-16c55e9a5fa8', summary: 'My wife wanted bees and chickens. Ten years ago we got the bees. But, for chickens, we had to move out of the county.', published_at: '2022-05-24', style: 'post')

Publishment.create(title: 'Cardiac Karate', link: 'https://medium.com/@dondenoncourt/cardiac-kata-610d2ce0df08', summary: 'Myocardial infarction. Heart attack. That’s not what I had. I coped with surgery and did rehap reinvigorating my decades of karate training.', published_at: '2021-09-15', style: 'post')

Publishment.create(title: 'I am a Fat Person', link: 'https://medium.com/@dondenoncourt/i-am-a-fat-person-c3167b843040', summary: 'I have been battling fat all my life. I discuss various diets, philosophies, and a recent solution with intermittent fasting', published_at: '2020-01-19', style: 'post')

Publishment.create(title: 'To All the [Ugly] Cars I Loved Before', link: 'https://medium.com/@dondenoncourt/to-all-the-ugly-cars-i-loved-before-778e2ecb0849', summary: 'I have had a hate-hate relationship with cars all my life from a Ford Falcon to the Millenium Falcon.', published_at: '2019-02-19', style: 'post')

Publishment.create(title: 'One Too Many Monitors', link: 'https://dev.to/dondenoncourt/one-too-many-monitors-53fi', summary: 'Pontificating on my use of just a laptop with no external monitors.', published_at: '2019-01-06', style: 'post')

Publishment.create(title: 'The Donut Scam', link: 'https://dev.to/dondenoncourt/the-donut-scam-1c11', summary: 'A true confessions of how I scammed donuts from innocent ladies at work in the 1980s', published_at: '2020-01-06', style: 'post')

Publishment.create(title: 'A Fictional Account of How I Invented', link: 'https://www.simplethread.com/how-i-invented-react/', summary: 'This tongue-in-cheek post covers how I began to "develop a simplified perspective of why React was created and how it was implemented', published_at: '2019-19-02', style: 'post')

Publishment.create(title: 'Total Recall:: How to Memorize a Technical Book', link: 'https://www.simplethread.com/total-recall-memorize-a-tech-book/', summary: 'This post covers how to use the memory palace technique to memorize technical books.', published_at: '2018-01-01', style: 'post')

Publishment.create(title: 'Relearning to Learn', link: 'https://www.infoq.com/articles/relearning-learn/', summary: 'This post covers how to learn better and faster.', published_at: '2017-12-07', style: 'post')

Publishment.create(title: 'Don Denoncourt on Aging in IT and Being a Lifelong Learner', link: 'https://www.infoq.com/podcasts/don-denoncourt-aging-it', summary: 'This podcast covers how to learn better and faster.', published_at: '2017-12-07', style: 'podcast')



Publishment.create(title: 'Retiring Mainframe Programmers: Should I Care?', link: 'https://www.infoq.com/articles/retiring-mainframe-programmers', summary: 'Mainframe developers are not just retiring, they are expiring -- and young developers have little interest in mainframe careers. This was a piece commissioned by InfoQ. It did extremely well with tons of comments and discussions.', published_at: '2017-10-11', style: 'post')

Publishment.create(title: 'Oldies in Tech: Hiring and Getting Hired', link: 'https://www.infoq.com/articles/tech-oldies-hiring', summary: 'In this piece I will speak from my experience and heart on the subject of hiring and getting hired. I’m writing for two audiences: Oldies looking for work and Youngies doing the hiring.', published_at: '2017-09-06', style: 'post')

Publishment.create(title: 'On Getting Old(er) in Tech', link: 'https://www.infoq.com/presentations/developer-aging', summary: 'Don Denoncourt talks about how to stay relevant in the tech industry, ways to keep coding skills sharp, no matter how old we are, perspectives for technical growth and how to be a lifelong learner.', published_at: '2017-06-01', style: 'presentation')

Publishment.create(title: 'Show Up for Work and Don\'t Steal', link: 'https://corgibytes.com/blog/2017/03/21/show-up-dont-steal/', summary: 'This article really is about how I think a coder should "show up for work." It has some fun with a story about one of my sons, who is now a successful Investment Banker and a VP at harriswilliams.com.', published_at: '2017-03-17', style: 'post')

Publishment.create(title: 'On Getting Old(er) in TechOn Getting Old(er) in Tech', link: 'https://dev.to/corgibytes/on-getting-older-in-tech', summary: 'My life story of four decades of development and how I stay competitive. This post was read by half a million people within one month of publication.', published_at: '2016-12-05', style: 'post')

Publishment.create(title: 'My Quest for MediocrityMy Quest for Mediocrity', link: 'https://corgibytes.com/blog/2016/08/30/quest-for-mediocrity/', summary: 'I cover my tongue-in-cheek strategy for self-improvement by surrounding myself with better-than-average developers.', published_at: '2016-08-30', style: 'post')

Publishment.create(title: 'I LIED ABOUT MY ROLE MODEL IN A JOB INTERVIEWI LIED ABOUT MY ROLE MODEL IN A JOB INTERVIEW', link: 'https://corgibytes.com/blog/2015/10/25/role-model/', summary: 'The title is true but it is click bait. It really is about my real role model and mentor.', published_at: '2015-10-25', style: 'post')
