import React from 'react';

function TimelineItem({year, title, duration, details}) {
    return (
        <ol className='dark:border-stone-700 flex flex-col md:flex-row relative border-l border-stone-200'>
            <li className='mb-10 ml-4'>
                <div className='dark:border-stone-900 dark:bg-stone-700 absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white' />
                    <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs med:text-sm'>
                        <span className='dark:text-stone-900 dark:bg-white inline-block px-2 py-1 font-semibold text-white bg-stone-900 rounded-md'>
                            {year}
                        </span>
                        <h3 className='dark:text-white text-lg font-semibold text-stone-900'>
                            {title}
                        </h3>
                        <div className='dark:text-stone-500 my-1 text-sm font-normal leading-none text-stone-400'>
                            {duration}
                        </div>
                        <p className='dark:text-stone-400 my-2 text-base font-normal text-stone-500'>
                            {details}
                        </p>
                    </p>
            </li>
        </ol>
    )
}

export default TimelineItem;