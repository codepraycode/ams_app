import React from 'react'
// import AccountEcept from '../components/AccountEcept';
import Groups from '../components/Groups';
import Levies from '../components/Levies';
import Section from '../components/Section';
import Table from '../components/Table';
import Button from '../widgets/Button';

const Dashboard = () => {  
  const headers = ['Ref', "Amount", "Date", <>{" "}</>]
  const content = [
    ["#1234", "2000.00", "2010-10-10", <Button label="View" variant={"solid"} />],
    ["#1234", "2000.00", "2010-10-10", <Button label="View" variant={"solid"} />],
    ["#1234", "2000.00", "2010-10-10", <Button label="View" variant={"solid"} />],
    ["#1234", "2000.00", "2010-10-10", <Button label="View" variant={"solid"} />],
    ["#1234", "2000.00", "2010-10-10", <Button label="View" variant={"solid"} />]
  ]
  return (
    <>

      <section className='intro'>

        <div>
          <h3>Welcome!</h3>

          {/* <p>Last login was 23 hours ago</p> */}
        </div>

        <div className={"actions"}>
          <Button 
            label={"Verify Account"} 
            variant={"gradient"}
            size={"lg"}
          />
            
          <Button label={"Activate Account"}
            variant={"gradient"}
            size={"lg"} 
          />
        </div>
        
      </section>


      <section className='sided_section'>
        <Levies />
        <div className="divider"></div>
        <Groups/>
      </section>


      {/* Levies charges tables */}
      <Section 
        contentProps={{
          className: "d-flex col-gap-2 row-gap-2 flex-wrap",
        }}
      >

        <Table 
          tableHeadData={headers}
          tableBodyData={content}
          // checkable={true}
        />
        <Table 
          tableHeadData={headers}
          tableBodyData={content}
          // checkable={true}
        />
        <Table 
          tableHeadData={headers}
          tableBodyData={content}
          // checkable={true}
        />
        <Table 
          tableHeadData={headers}
          tableBodyData={content}
          // checkable={true}
        />

      </Section>

    </>
  )
}

export default Dashboard;