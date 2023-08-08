'use client';
import { NextLogo } from '#/ui/NextLogo';
import Link from 'next/link';
import { usePathname, useSelectedLayoutSegment } from 'next/navigation';
import { MenuAlt2Icon, XIcon } from '@heroicons/react/solid';
import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';
import pathMap from '#/lib/path';
import type { NavItem } from '#/types/webContent';
import { schemaJson } from '#/lib/constants';
import { useApp } from '#/hooks/useApp';

export function AdminSideBar() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);
  
  const pathName = usePathname()
  const app = useApp()
  const currentUser = useRef(useApp().currentUser)
  console.log({pathName})
  const navlinks = useRef([
    "record",
  ])
  useEffect(() => {
    //debugger
    // if(currentUser.current === null){
    //   throw new Error("User not login!")
    // }
  })
  return (
    <div id="admin-nav"
         className="fixed top-0 z-10 flex w-full flex-col border-b border-gray-800 bg-black lg:bottom-0 lg:z-auto lg:w-72 lg:border-r lg:border-gray-800"
    >
      <div className="flex h-14 items-center py-4 px-4 lg:h-auto">
        <Link
          href="/"
          className="group flex w-full items-center space-x-2.5"
          onClick={close}
        >
          <div className="h-7 w-7 rounded-full border border-white/30 group-hover:border-white/50">
            <NextLogo />
          </div>

          <h3 className="font-semibold tracking-wide text-gray-400 group-hover:text-gray-50">
            <p>App Directory</p> <span className="Work in progress">{currentUser.current?.customData?.name || "Set your name"}</span>
          </h3>
        </Link>
      </div>
      {/* <SearchBar/> */}
      <button
        type="button"
        className="group absolute right-0 top-0 flex h-14 items-center space-x-2 px-4 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="font-medium text-gray-100 group-hover:text-gray-400">
          Menu
        </div>
        {isOpen ? (
          <XIcon className="block w-6" />
        ) : (
          <MenuAlt2Icon className="block w-6" />
        )}
      </button>

      <div
        className={clsx('overflow-y-auto lg:static lg:block', {
          'fixed inset-x-0 bottom-0 top-14 mt-px bg-black': isOpen,
          hidden: !isOpen,
        })}
      >
        <nav className="space-y-6 px-2 py-5" id='side-nav-container'>
          {/* {userActions.map((section) => {
            return (
              <div key={section.name}>
                <div className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider">
                  <div>{section.name}</div>
                </div> */}

                <div className="space-y-1">
                  {Object.keys(schemaJson).map((schemaObject) => {
                    const tableName = schemaJson[schemaObject].name
                    return (
                    <GlobalNavItem key={tableName} 
                     item={{
                      name: tableName,
                      link: pathMap["adminQuery"](tableName)
                    }} 
                    close={close} />)
                  })}
                </div>
             
          {/*   );
          })} */}
          
        </nav>
      </div>
    </div>
  );
}

//TODO type link
export function GlobalNavItem({
  item,
 
  close,
}: {
  item: NavItem;
  link?: string;
  close: () => false | void;
}) {
  const segment = useSelectedLayoutSegment();
  const isActive = item.link === segment;

  return (
    <Link
      onClick={close}
      href={item.link}
      className={clsx(
        'block rounded-md px-3 py-2 text-sm font-medium hover:text-gray-300',
        {
          'text-blue-400 hover:bg-blue-800': !isActive,
          'text-white': isActive,
        },
      )}
    >
      {item.name}
    </Link>
  );
}
