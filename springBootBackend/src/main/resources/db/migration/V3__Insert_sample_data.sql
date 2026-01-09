-- Insert sample users
INSERT INTO users (name, email) VALUES 
('John Doe', 'john@example.com'),
('Jane Smith', 'jane@example.com');

-- Insert sample tasks
INSERT INTO tasks (title, description, status, priority, created_at, updated_at, assigned_to) VALUES 
('Setup project', 'Initialize Spring Boot project', 'DONE', 'HIGH', NOW(), NOW(), 1),
('Create API endpoints', 'Implement REST API for task management', 'IN_PROGRESS', 'MEDIUM', NOW(), NOW(), 1),
('Write documentation', 'Create README and API documentation', 'TODO', 'LOW', NOW(), NOW(), 2),
('Unassigned task', 'This task has no assignee', 'TODO', 'MEDIUM', NOW(), NOW(), NULL);