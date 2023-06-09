import React, { useState } from "react";
import { Tab } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export const Sports = () => {
  let [categories] = useState({
    Cricket: [
        {
            id: 1,
            title: "One Day Internationals",
            team1: "Ireland",
            team2: "Bangladesh",
          },
          {
            id: 2,
            title: "T20 Internationals",
            team1: "Australia",
            team2: "India",
          },
          {
            id: 3,
            title: "Test Matches",
            team1: "England",
            team2: "New Zealand",
          },
          {
            id: 4,
            title: "ODI Series",
            team1: "Pakistan",
            team2: "West Indies",
          },
          {
            id: 5,
            title: "T20 Series",
            team1: "South Africa",
            team2: "Sri Lanka",
          },
    ],
    Football: [
      {
        id: 1,
        title: "One Day Internationals",
        team1: "Ireland",
        team2: "Bhangladesh",
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: "2h ago",
        commentCount: 3,
        shareCount: 2,
      },
    ],
    BasketBall: [
      {
        id: 1,
        title: "One Day Internationals",
        team1: "Ireland",
        team2: "Bhangladesh",
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: "2h ago",
        commentCount: 3,
        shareCount: 2,
      },
    ],
    BaseBall: [
      {
        id: 1,
        title: "One Day Internationals",
        team1: "Ireland",
        team2: "Bhangladesh",
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: "2h ago",
        commentCount: 3,
        shareCount: 2,
      },
    ],
    Popular: [
      {
        id: 1,
        title: "Is tech making coffee better or worse?",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: "The most innovative things happening in coffee",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
      },
    ],
    Trending: [
      {
        id: 1,
        title: "Ask Me Anything: 10 answers to your questions about coffee",
        date: "2d ago",
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: "4d ago",
        commentCount: 1,
        shareCount: 2,
      },
    ],
    Popular2: [
      {
        id: 1,
        title: "Is tech making coffee better or worse?",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: "The most innovative things happening in coffee",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
      },
    ],
    Trending4: [
      {
        id: 1,
        title: "Ask Me Anything: 10 answers to your questions about coffee",
        date: "2d ago",
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: "4d ago",
        commentCount: 1,
        shareCount: 2,
      },
    ],
  });
  return (
    <div className="w-full sm:px-0 mb-16 ">
      <Tab.Group>
        <Tab.List className="flex gap-2 rounded-xl bg-blue-900/20 p-1  scroll-x">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-md py-2 px-2 text-sm font-medium leading-5 ",
                  " ring-opacity-60 ring-offset-2 min-w-[150px]",
                  selected
                    ? "bg-white "
                    : "text-blue-100 bg-[#32383e] hover:bg-[#32383e] hover:text-white"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(''
              //     // 'rounded-md w-full bg-white p-3',
              //     "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                )}
            >
              <ul>
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="relative pb-2"
                  >
                    <div class="rounded-md shadow-md w-full bg-[#22262a]">
                      <div class="flex w-full items-center bg-[#32383e] rounded-t-md justify-between border-b p-3">
                        <div class="flex items-center space-x-3">
                          <div class="flex items-center text-sm text-[#f9fafa] font-bold ">
                            {post.title}
                          </div>
                        </div>
                        <div class="flex items-center space-x-8 px-6">
                          <div class="text-sm font-bold text-[#f9fafa]">2</div>
                        </div>
                      </div>

                      <div class="flex items-center flex-1 p-4 cursor-pointer select-none">
                        <div class="flex flex-col items-center justify-center w-10 h-10 mr-4 ">
                          <a href="#" class="relative block">
                            <img
                              alt="profil"
                              src="https://sportsexch.com/images/icons/cricket.png"
                              class="mx-auto object-cover rounded-full h-10 w-10 bg-white p-2"
                            />
                          </a>
                        </div>
                        <div class="flex-1 pl-1 mr-16">
                          <div class="font-medium text-[#cfd4d8]">{post.team1}</div>
                          <div class="text-xs font-bold text-[#cfd4d8] ">
                            {post.team2}
                          </div>
                        </div>
                        <div class="text-xs font-bold text-[#cfd4d8] ">
                          6:00 AM
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};
