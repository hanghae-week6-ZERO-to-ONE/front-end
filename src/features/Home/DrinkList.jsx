import styled from 'styled-components';
import { Link } from 'react-router-dom';

const DrinkList = () => {
  return (
    <DrinkListWrap>
      <Link to={'category/id'}>
        <h2>제로슈가</h2>
      </Link>
      <ul>
        <li>
          <Link to={'detail/id'}>
            <img
              src="https://cdn.011st.com/11dims/resize/600x600/quality/75/11src/product/3842779007/B.jpg?500000000"
              alt=""
            />
            <p>펩시 제로 라임</p>
          </Link>
        </li>
        <li>
          <Link to={'detail/id'}>
            <img
              src="https://cdn.011st.com/11dims/resize/600x600/quality/75/11src/product/3842779007/B.jpg?500000000"
              alt=""
            />
            <p>펩시</p>
          </Link>
        </li>
        <li>
          <Link to={'detail/id'}>
            <img
              src="https://cdn.011st.com/11dims/resize/600x600/quality/75/11src/product/3842779007/B.jpg?500000000"
              alt=""
            />
            <p>펩시</p>
          </Link>
        </li>
        <li>
          <Link to={'detail/id'}>
            <img
              src="https://cdn.011st.com/11dims/resize/600x600/quality/75/11src/product/3842779007/B.jpg?500000000"
              alt=""
            />
            <p>펩시</p>
          </Link>
        </li>
        <li>
          <Link to={'detail/id'}>
            <img
              src="https://cdn.011st.com/11dims/resize/600x600/quality/75/11src/product/3842779007/B.jpg?500000000"
              alt=""
            />
            <p>펩시</p>
          </Link>
        </li>
      </ul>
    </DrinkListWrap>
  );
};

export default DrinkList;

const DrinkListWrap = styled.article`
  margin-bottom: 10px;
  h2 {
    margin-top: 120px;
    margin-bottom: 30px;
    font-weight: 400;
    font-size: 35px;
  }
  ul {
    display: flex;
    justify-content: space-between;
    li {
      img {
        width: 200px;
        height: 200px;
      }
      p {
        width: 100%;
        font-size: 20px;
        text-align: center;
        margin-top: 10px;
      }
    }
  }
`;
