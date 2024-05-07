package com.employeeManagement.EmployeeManagement.repository;

import com.employeeManagement.EmployeeManagement.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee,Long> {
}
