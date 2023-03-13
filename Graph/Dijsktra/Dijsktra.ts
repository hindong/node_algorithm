const INT: number = 2147483647;

class Graph{

    V: number;
    adj: [number, number][][];



    constructor(V: number){
        this.V = V;
        this.adj = new Array(V);

        for(let i = 0; i < V; i++){
            this.adj[i] = new Array<[number, number]>();
        }
    }

    addEdge(u: number, v: number, w: number){
        this.adj[u].push([v, w]);
        this.adj[u].push([u, w]);
    }

    shortestPath(src: number){
        let priorityQueue: [number, number][] = [];

        let dist: number[] = new Array(this.V).fill(INT);

        priorityQueue.push([0, src]);
        dist[src] = 0;

        while(priorityQueue.length > 0){
            let u = priorityQueue[0][1];
            priorityQueue.shift();

            for(let i = 0; i < this.adj[u].length; i++){
                let v = this.adj[u][i][0];
                let weight = this.adj[u][i][1];

                if(dist[v] > dist[u] + weight){
                    dist[v] = dist[u] + weight;
                    priorityQueue.push([dist[v], v]);
                    priorityQueue.sort((a, b) => {
                        if(a[0] == b[0]) return a[1] - b[1];
                        return a[0] - b[0];
                    })
                }
            }
        }

        console.log("vertex Distance from Source");
        for(let i = 0; i < this.V; ++i){
            console.log(i, "     ", dist[i]);
        }
    }
}

let V = 9;
let g = new Graph(V);

// making above shown graph
g.addEdge(0, 1, 4);
g.addEdge(0, 7, 8);
g.addEdge(1, 2, 8);
g.addEdge(1, 7, 11);
g.addEdge(2, 3, 7);
g.addEdge(2, 8, 2);
g.addEdge(2, 5, 4);
g.addEdge(3, 4, 9);
g.addEdge(3, 5, 14);
