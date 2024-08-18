import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import {
  Container,
  InputPart,
  DisplayPart,
  Heading,
  Input,
  Label,
  Option,
  InputBox,
  AddBtn,
  Heading2,
  OptionsBox,
  TagBtn,
  TasksBox,
  Task,
  TaskText,
  TaskTag,
  EmptyView,
  EmptyText,
  Tagsli,
} from './styledcomponents'

const MyTasks = props => {
  const {tagsList} = props
  const [inputId, setInputId] = useState(tagsList[0].optionId)
  const [activeId, setActiveId] = useState('Initial')
  const [task, setTask] = useState('')
  const [list, setList] = useState([])
  const filteredList =
    activeId === 'Initial' ? list : list.filter(each => each.tagId === activeId)

  const onAdd = e => {
    e.preventDefault()
    const tagText = tagsList.filter(each => each.optionId === inputId)[0]
      .displayText

    if (task !== '') {
      const newTask = {
        id: uuidv4(),
        text: task,
        tag: tagText,
        tagId: inputId,
      }
      console.log(newTask)
      setList(prev => [...prev, newTask])
      setTask('')
      setInputId(tagsList[0].displayText)
    }
  }

  const InputSide = () => (
    <InputPart onSubmit={onAdd}>
      <Heading>Create a task!</Heading>

      <InputBox>
        <Label htmlFor="task">Task</Label>
        <Input
          id="task"
          value={task}
          onChange={e => setTask(e.target.value)}
          type="text"
          placeholder="Enter the task here"
        />
      </InputBox>
      <InputBox>
        <Label htmlFor="tags">Tags</Label>
        <Input
          as="select"
          id="tags"
          onChange={e => setInputId(e.target.value)}
          value={inputId}
        >
          {tagsList.map(each => {
            const {optionId, displayText} = each

            return (
              <Option key={optionId} value={optionId}>
                {displayText}
              </Option>
            )
          })}
        </Input>
      </InputBox>

      <AddBtn type="button" onClick={onAdd}>
        Add Task
      </AddBtn>
    </InputPart>
  )

  const DisplaySide = () => (
    <DisplayPart>
      <Heading2>Tags</Heading2>
      <OptionsBox>
        {tagsList.map(each => {
          const {optionId, displayText} = each

          const onClickOption = () => {
            if (activeId !== '' && optionId === activeId) {
              setActiveId('Initial')
            } else {
              setActiveId(optionId)
            }
          }

          return (
            <Tagsli key={optionId}>
              <TagBtn
                type="button"
                isActive={activeId === optionId}
                onClick={onClickOption}
              >
                {displayText}
              </TagBtn>
            </Tagsli>
          )
        })}
      </OptionsBox>

      <Heading2>Tasks</Heading2>
      {list.length === 0 ? (
        <EmptyView>
          <EmptyText>No Tasks Added Yet</EmptyText>
        </EmptyView>
      ) : (
        <TasksBox>
          {filteredList.map(each => {
            const {text, tag, id} = each

            return (
              <Task key={id}>
                <Tagsli>
                  <TaskText>{text}</TaskText>
                </Tagsli>
                <Tagsli>
                  <TaskTag>{tag}</TaskTag>
                </Tagsli>
              </Task>
            )
          })}
        </TasksBox>
      )}
    </DisplayPart>
  )

  return (
    <Container>
      {InputSide()}
      {DisplaySide()}
    </Container>
  )
}

export default MyTasks
