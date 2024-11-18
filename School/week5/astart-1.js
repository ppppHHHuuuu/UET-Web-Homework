class Node {
  constructor(x, y, traversable) {
    this.x = x;
    this.y = y;
    this.traversable = traversable;
    this.g = 0; // Cost from start node to current node
    this.h = 0; // Heuristic cost from current node to destination node
    this.f = 0; // Total cost (g + h)
    this.parent = null; // Parent node
  }
}

function astar(start, destination, grid) {
  const openSet = [start];
  const closedSet = [];

  while (openSet.length > 0) {
    // Find the node with the lowest f cost in the open set
    let lowestFIndex = 0;
    for (let i = 1; i < openSet.length; i++) {
      if (openSet[i].f < openSet[lowestFIndex].f) {
        lowestFIndex = i;
      }
    }

    const current = openSet[lowestFIndex];

    // Check if the current node is the destination
    if (current === destination) {
      const path = [];
      let temp = current;
      while (temp !== null) {
        path.push(temp);
        temp = temp.parent;
      }
      return path.reverse();
    }

    // Move current node from open set to closed set
    openSet.splice(lowestFIndex, 1);
    closedSet.push(current);

    // Get the neighboring nodes
    const neighbors = getNeighbors(current, grid);

    for (let i = 0; i < neighbors.length; i++) {
      const neighbor = neighbors[i];

      // Skip if the neighbor is already in the closed set or not traversable
      if (closedSet.includes(neighbor) || !neighbor.traversable) {
        continue;
      }

      // Calculate the tentative g score
      const tentativeG = current.g + 1;

      // Check if the neighbor is already in the open set
      const inOpenSet = openSet.includes(neighbor);

      if (!inOpenSet || tentativeG < neighbor.g) {
        // Update the neighbor's properties
        neighbor.g = tentativeG;
        neighbor.h = heuristic(neighbor, destination);
        neighbor.f = neighbor.g + neighbor.h;
        neighbor.parent = current;

        if (!inOpenSet) {
          openSet.push(neighbor);
        }
      }
    }
  }

  // No path found
  return null;
}

function getNeighbors(node, grid) {
  const neighbors = [];
  const { x, y } = node;

  // Check top neighbor
  if (y > 0) {
    neighbors.push(grid[y - 1][x]);
  }

  // Check right neighbor
  if (x < grid[0].length - 1) {
    neighbors.push(grid[y][x + 1]);
  }

  // Check bottom neighbor
  if (y < grid.length - 1) {
    neighbors.push(grid[y + 1][x]);
  }

  // Check left neighbor
  if (x > 0) {
    neighbors.push(grid[y][x - 1]);
  }

  return neighbors;
}

function heuristic(node, destination) {
  // Manhattan distance heuristic
  return Math.abs(node.x - destination.x) + Math.abs(node.y - destination.y);
}

// 1. Read file => array 2d
const arr = [
  [1, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 4],
  [0, 4, 4, 4, 4, 4, 0, 4, 4, 4, 0, 4, 4, 4, 0, 4, 4, 4, 0, 4],
  [0, 0, 0, 0, 0, 4, 0, 4, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 4],
  [4, 4, 4, 4, 0, 4, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 4],
  [0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 4, 0, 4],
  [0, 4, 4, 4, 4, 4, 4, 4, 0, 4, 0, 4, 0, 4, 4, 4, 0, 4, 0, 4],
  [0, 0, 0, 0, 0, 0, 0, 4, 0, 4, 0, 0, 0, 4, 0, 0, 0, 4, 0, 4],
  [4, 4, 4, 4, 4, 4, 0, 4, 4, 4, 0, 4, 4, 4, 0, 4, 4, 4, 4, 4],
  [0, 0, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 0, 0, 4],
  [0, 4, 4, 4, 0, 4, 4, 4, 0, 4, 4, 4, 0, 4, 4, 4, 4, 4, 0, 4],
  [0, 0, 0, 4, 0, 4, 0, 0, 0, 4, 2, 0, 0, 0, 0, 4, 0, 0, 0, 4],
  [4, 4, 0, 4, 0, 4, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 4, 0, 4],
  [0, 0, 0, 4, 0, 4, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 4, 0, 4],
  [0, 4, 4, 4, 0, 4, 4, 4, 4, 4, 0, 4, 0, 4, 4, 4, 4, 4, 0, 4],
  [0, 4, 0, 0, 0, 0, 0, 4, 0, 0, 0, 4, 0, 4, 0, 0, 0, 0, 0, 4],
  [0, 4, 0, 4, 4, 4, 0, 4, 0, 4, 4, 4, 0, 4, 0, 4, 4, 4, 4, 4],
  [0, 4, 0, 4, 0, 0, 0, 4, 0, 0, 0, 0, 0, 4, 0, 4, 0, 0, 0, 4],
  [0, 4, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 4, 4, 4, 0, 4],
  [0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
  [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]
];
let nodeGrid = [];
// 2. Loop through each element => turn to node
var startNode ;
var destinationNode ;
for (let x = 0; x < arr.length; x++) {

    nodeGrid[x] = []
    for (let y = 0; y < arr[x].length; y++) {
        let node;
        if (arr[x][y] == 1) {
          node = new Node(x, y, true);
          startNode = node;
        }
        else if (arr[x][y] == 2) {
          node = new Node(x, y, true);
          destinationNode = node;
        }
        else if (arr[x][y] == 0) {
          node = new Node(x, y, true);
                        
        } else {
          node = new Node(x, y, false);
        }
        nodeGrid[x][y] = node;
    }
}
const path = astar(startNode, destinationNode, nodeGrid);
console.log(path)

function renderGrid() {
    const gridDiv = document.getElementById('grid');
    const table = document.createElement('table');

    for (let x = 0; x < nodeGrid.length; x++) {
        const row = document.createElement('tr');
        for (let y = 0; y < nodeGrid[x].length; y++) {
            const cell = document.createElement('td');

            if (nodeGrid[x][y].traversable) {
                if (arr[x][y] === 1) {
                    cell.classList.add('start');
                } else if (arr[x][y] === 2) {
                    cell.classList.add('destination');
                } else if (path && path.some(node => node.x === x && node.y === y)) {
                  
                    cell.classList.add('path');
                } else {
                    cell.classList.add('empty');
                }
            } else {
                cell.classList.add('wall');
            }

            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    gridDiv.appendChild(table);
}

renderGrid()