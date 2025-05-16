import React, { useState } from "react";
import { Form, Button, ProgressBar, ListGroup } from "react-bootstrap";

const Transmission: React.FC = () => {
  const [url, setUrl] = useState("");
  const [tasks, setTasks] = useState<
    { name: string; progress: number; status: string }[]
  >([]);

  const handleAddTask = () => {
    if (url.trim() === "") return;

    const newTask = {
      name: url,
      progress: 0,
      status: "In Progress",
    };

    setTasks([...tasks, newTask]);
    setUrl("");

    // Simulate progress for the task
    const interval = setInterval(() => {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.name === newTask.name
            ? {
                ...task,
                progress: task.progress + 10,
                status: task.progress + 10 >= 100 ? "Completed" : "In Progress",
              }
            : task
        )
      );
    }, 500);

    setTimeout(() => clearInterval(interval), 5000); // Stop updating after 5 seconds
  };

  return (
    <div className="container mt-4">
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddTask();
        }}
      >
        <Form.Group controlId="urlInput">
          <Form.Label>Enter URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter a URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-2">
          Add
        </Button>
      </Form>

      <div className="mt-4">
        <ListGroup>
          {tasks.map((task, index) => (
            <ListGroup.Item key={index} className="d-flex align-items-center">
              <div className="flex-grow-1">{task.name}</div>
              <div className="flex-grow-1">
                <ProgressBar now={task.progress} label={`${task.progress}%`} />
              </div>
              <div className="ms-3">{task.status}</div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </div>
  );
};

export default Transmission;
