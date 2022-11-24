// import { useState } from "react";
// import { AiOutlineCheckCircle } from 'react-icons/ai'
// import { FiThumbsUp } from 'react-icons/fi'
import { Card, Avatar } from 'antd'
import { CloseOutlined, CheckCircleOutlined } from '@ant-design/icons'
import '../index.css'



const TaskItem = ({ showTask, onDelete }) => {


  const addPriorClass = (showTask) => {
    if (showTask.priority === 'Low') {
      return 'low'
    }
    else if (showTask.priority === 'Medium') {
      return 'medium'
    }
    else return 'high'
  }

  return (
    <Card className="custom-card" style={{ margin: 10, borderRadius: 20 }} hoverable={true}>
      <div className="taskName">
        <span>
          <CheckCircleOutlined />
          <b>{showTask.name}</b>
        </span>
        <CloseOutlined onClick={() => { onDelete(showTask.id) }} />
      </div>
      {showTask.priority ? <div className={`taskPrior ${addPriorClass(showTask)}`}>{showTask.priority}</div> : <div></div>}
      <div className="taskDueDate"> <Avatar style={{ marginRight: 10 }}>{showTask.assignee ? showTask.assignee[0].toUpperCase() : ''}</Avatar>{showTask.dueDate}</div>
    </Card>

  )

};

export default TaskItem;
