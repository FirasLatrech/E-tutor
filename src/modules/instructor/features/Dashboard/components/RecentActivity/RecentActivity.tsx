import React from 'react'
import ActivityCard from './ActivityCard'
import SelectGeneric from 'modules/shared/components/SelectGeneric'

function RecentActivity() {
  return (
    <div className='w-full flex flex-col gap-[0.1rem]'>
        <div className='bg-white flex gap-1 items-center justify-between p-4'><h1 className='text-gray-900 font-semibold'>Recent Activity</h1><p>Today</p></div>
        <div className='bg-white max-h-[20rem] no-scrollbar overflow-auto scroll-smooth flex flex-col gap-[0.5rem]'>
            <ActivityCard username='Kevin' activityDescription='comments on your lecture' activitySubject='“What is ux” in “2021 ui/ux design with figma”'/>
            <ActivityCard username='Kevin' activityDescription='comments on your lecture' activitySubject='“What is ux” in “2021 ui/ux design with figma”'/>
            <ActivityCard username='Kevin' activityDescription='comments on your lecture' activitySubject='“What is ux” in “2021 ui/ux design with figma”'/>
            <ActivityCard username='Kevin' activityDescription='comments on your lecture' activitySubject='“What is ux” in “2021 ui/ux design with figma”'/>
            <ActivityCard username='Kevin' activityDescription='comments on your lecture' activitySubject='“What is ux” in “2021 ui/ux design with figma”'/>
            <ActivityCard username='Kevin' activityDescription='comments on your lecture' activitySubject='“What is ux” in “2021 ui/ux design with figma”'/>
            <ActivityCard username='Kevin' activityDescription='comments on your lecture' activitySubject='“What is ux” in “2021 ui/ux design with figma”'/>
            <ActivityCard username='Kevin' activityDescription='comments on your lecture' activitySubject='“What is ux” in “2021 ui/ux design with figma”'/>
            <ActivityCard username='Kevin' activityDescription='comments on your lecture' activitySubject='“What is ux” in “2021 ui/ux design with figma”'/>
            <ActivityCard username='Kevin' activityDescription='comments on your lecture' activitySubject='“What is ux” in “2021 ui/ux design with figma”'/>
            <ActivityCard username='Kevin' activityDescription='comments on your lecture' activitySubject='“What is ux” in “2021 ui/ux design with figma”'/>
            <ActivityCard username='Kevin' activityDescription='comments on your lecture' activitySubject='“What is ux” in “2021 ui/ux design with figma”'/>
            </div>
    </div>
  )
}

export default RecentActivity