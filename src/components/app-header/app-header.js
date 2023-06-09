import './app-header.sass';
import styled from 'styled-components';

const Header = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    h1 {
        font-size: 26px;
        color: ${props => props.colored ? 'red' : 'black'};
        &:hover {
            cursor: default;
        }
    }

    h2 {
        font-size: 1.2rem;
        color: grey;
        cursor: default;
    }
`

const AppHeader = ({liked, allPosts}) => {
    return (
        <Header>
            <h1>Michail Bezverhov</h1>
            <h2>{allPosts} записей, из них понравилось {liked}</h2>
        </Header>
    )
}

export default AppHeader;