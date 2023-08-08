'use client'
import { adminActions } from '#/lib/webcontent'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import ModalFormWithImage from '../form/ModalFormWithImage'
import ModalForm from '../form/ModalFormWithImage'

export function AdminMainPanel() {
  const pathName: string | null = usePathname()

  return (
    <div className="space-y-10 text-white">
      {adminActions.map((section) => (
        <div key={section.name} className="space-y-5">
          <div className="text-xs font-semibold uppercase tracking-wider text-gray-400">
            {section.name}
          </div>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {section.items.map((item) => (
              <Link
                href={`${pathName ? pathName : ''}/${item.link}`}
                key={item.name}
                className="group block space-y-1.5 rounded-lg bg-gray-900 px-5 py-3 hover:bg-gray-800"
              >
                <div
                  className="font-medium text-gray-200 group-hover:text-gray-50"
                >
                  {item.name}
                </div>

                {item.description ? (
                  <div className="line-clamp-3 text-sm text-gray-400 group-hover:text-gray-300">
                    {item.description}
                  </div>
                ) : null}
              </Link>
            ))}
          </div>
        </div>
      ))}
      {/* <ModalFormWithImage src={require('../../public/grid.svg')} desc='placeholder' /> */}
    </div>
  )
}
