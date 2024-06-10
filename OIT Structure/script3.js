/*let employees = {
    "name": "Managing Director",
    "children": [
      { "name": "CEO", 
        "children": [
          { "name": "CMO" },
          { "name": "Junior Software Developer" },
          { "name": "UI/UX Designer" }
        ]
      },
      { "name": "Digital Marketing Associate",
        "children": [
          { "name": "Interns" }
        ]
      }
    ]
  };
  
  // Create a tree layout
  const width = 600;
  const height = 400;
  
  const treeLayout = d3.tree().size([height, width]);
  
  // Append a svg element to the body
  const svg = d3.select("#tree-container").append("svg")
      .attr("width", width)
      .attr("height", height)
    .append("g")
      .attr("transform", "translate(50,50)");
  
  // Function to update the tree
  function updateTree(root) {
    // Clear previous tree
    svg.selectAll("*").remove();
  
    // Assigns the x and y position for the nodes
    const treeData = treeLayout(root);
  
    // Add links between nodes
    const link = svg.selectAll(".link")
        .data(treeData.links())
      .enter().append("path")
        .attr("class", "link")
        .attr("d", d3.linkHorizontal()
            .x(d => d.y)
            .y(d => d.x));
  
    // Add nodes and text
    const node = svg.selectAll(".node")
        .data(treeData.descendants())
      .enter().append("g")
        .attr("class", "node")
        .attr("transform", d => `translate(${d.y},${d.x})`);
  
    node.append("circle")
        .attr("r", 10);
  
    node.append("text")
        .attr("dy", "0.35em")
        .attr("x", d => d.children ? -13 : 13)
        .style("text-anchor", d => d.children ? "end" : "start")
        .text(d => d.data.name);
  }
  
  // Initial tree rendering
  updateTree(d3.hierarchy(employees));
  
  // Function to add employee
  function addEmployee() {
    const employeeName = document.getElementById('employeeName').value;
    const managerName = document.getElementById('managerName').value;
  
    if (employeeName && managerName) {
      const parentNode = findNode(employees, managerName);
      if (parentNode) {
        if (!parentNode.children) {
          parentNode.children = [];
        }
        parentNode.children.push({ "name": employeeName });
        updateTree(d3.hierarchy(employees));
      } else {
        alert("Manager not found!");
      }
    } else {
      alert("Please enter both employee and manager names!");
    }
  }
  
  // Function to remove employee
  function removeEmployee() {
    const employeeName = document.getElementById('employeeName').value;
    const parentNode = findParentNode(employees, employeeName);
    if (parentNode) {
      parentNode.children = parentNode.children.filter(child => child.name !== employeeName);
      updateTree(d3.hierarchy(employees));
    } else {
      alert("Employee not found!");
    }
  }
  
  // Function to find the node containing a given employee
  function findNode(node, name) {
    if (node.name === name) {
      return node;
    } else if (node.children) {
      let result = null;
      for (let child of node.children) {
        result = findNode(child, name);
        if (result) break;
      }
      return result;
    }
    return null;
  }
  
  // Function to find the parent node of a given employee
  function findParentNode(node, name) {
    if (node.children) {
      for (let child of node.children) {
        if (child.name === name) {
          return node;
        }
        const parent = findParentNode(child, name);
        if (parent) return parent;
      }
    }
    return null;
  }
  */