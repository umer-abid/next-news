import Image from "next/image";
import Toolbar from "../Components/toolbar";
import styles from "../styles/EOM.module.css";
export const EOM = ({ employee }) => {
  console.log("Employee Data is :", employee);
  return (
    <div className="page-container">
      <Toolbar />
      <div className={styles.main}>
        <h1>Employee of the Month</h1>

        <div className={styles.employeeOfTheMonth}>
          <h3>{employee.name}</h3>
          <h6>{employee.position}</h6>
          <Image
            src="https://pbs.twimg.com/profile_images/1345080486385901568/r-Et9x5E_400x400.jpg"
            width={300}
            height={300}
          />
          <p>{employee.description}</p>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async (pageContext) => {
  const apiResponse = await fetch(
    "http://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth"
  );
  const employee = await apiResponse.json();
  return {
    props: {
      employee,
    },
  };
};

export default EOM;
