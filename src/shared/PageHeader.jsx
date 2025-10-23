import PageTitle from '../ui/PageTitle'
import TodayDate from '../ui/TodayDate'
import Input from '../ui/Input'

const PageHeader = ({ title, isDate = false, isSearch = false }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="">
        <PageTitle title={title} />

        {isDate && <TodayDate />}
      </div>
      {isSearch && (<Input />)}
    </div>
  )
}

export default PageHeader
