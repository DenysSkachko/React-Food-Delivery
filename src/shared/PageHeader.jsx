import PageTitle from '../ui/PageTitle'
import TodayDate from '../ui/TodayDate'
import Input from '../ui/Input'
import SearchIcon from '../assets/search.svg?react'

const PageHeader = ({ title, isDate = false, isSearch = false }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="">
        <PageTitle title={title} />

        {isDate && <TodayDate />}
      </div>
      {isSearch && (<Input placeholder="Search for food, coffe, etc.." icon={<SearchIcon />}/>)}
    </div>
  )
}

export default PageHeader
