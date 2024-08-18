import styled from 'styled-components'

export const EmptyText = styled.p`
  color: #64748b;
  font-size: x-large;
  font-weight: 500;
  font-family: 'Roboto';
`

export const EmptyView = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
`

export const TaskTag = styled.p`
  color: #323f4b;
  font-size: small;
  font-weight: 500;
  font-family: 'Roboto';
  padding: 5px 20px;
  background-color: #f3aa4e;
  border-radius: 60px;
  margin: 0px;
`

export const TaskText = styled.p`
  color: #f1f5f9;
  font-size: medium;
  font-weight: 500;
  font-family: 'Roboto';
  margin: 0px;
`

export const Task = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 15px 25px;
  margin-bottom: 10px;
  background-color: #1a171d;
`

export const TasksBox = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0px;
`

export const Tagsli = styled.li`
  list-style: none;
`

export const TagBtn = styled.button`
  border: 1px solid #f3aa4e;
  padding: 5px 10px;
  color: #ffffff;
  font-size: medium;
  font-weight: 500;
  font-family: 'Roboto';
  outline: none;
  cursor: pointer;
  border-radius: 60px;
  margin-bottom: 10px;
  margin-right: 10px;
  background-color: ${props => (props.isActive ? '#f3aa4e' : 'transparent')};
`

export const OptionsBox = styled.ul`
  padding: 0px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 0px;
`

export const AddBtn = styled.button`
  color: #ffffff;
  font-size: medium;
  font-weight: 500;
  font-family: 'Roboto';
  border: 0px;
  outline: none;
  cursor: pointer;
  border-radius: 8px;
  width: 140px;
  padding: 10px;
  margin-top: 30px;
  background-color: #f3aa4e;
`

export const InputBox = styled.div`
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
`
export const Option = styled.option``

export const Label = styled.label`
  color: #f1f5f9;
  font-size: medium;
  font-weight: 500;
  font-family: 'Roboto';

  align-self: flex-start;
`

export const Input = styled.input`
  color: #64748b;
  width: 100%;
  padding: 13px 15px;
  border: 0px;
  border-radius: 3px;
  font-size: medium;
  font-weight: 500;
  font-family: 'Roboto';
  outline: none;
  cursor: pointer;
  margin-top: 10px;
`

export const Heading = styled.h1`
  color: #f3aa4e;
  font-weight: 500;
  font-family: 'Roboto';
`
export const Heading2 = styled.h1`
  color: #f8f8f8;
  font-size: x-large;
  font-weight: 500;
  font-family: 'Roboto';
  margin-bottom: 20px;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;

  @media screen and (max-width: 576px) {
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
  }
`

export const InputPart = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100%;
  width: 40%;
  padding: 5%;
  background-color: #131213;

  @media screen and (max-width: 576px) {
    width: 100%;
  }
`
export const DisplayPart = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  width: 60%;
  background-color: #000000;
  padding: 20px;

  @media screen and (max-width: 576px) {
    width: 100%;
  }
`
