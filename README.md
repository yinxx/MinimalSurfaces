# Minimal Surfaces
<img align="right" width="300" src="https://github.com/LittleBadger/MinimalSurfaces/blob/master/PSurface.png">

Here is a small program for visualizing and processing triangulated surfaces with the intrinsic discrete Laplace-Beltrami operator introduced by Bobenko and Springborn, see [1,2]. The operator differs from usual combinatorial Laplacians in that it is defined via the intrinsic Delaunay triangulation, which can differ considerably from the immersed triangulation.

In particular, the program implements a mean curvature flow based on the intrinsic Laplace-Beltrami operator, along with a version of the Pinkall-Polthier algorithm (see [3]) with changing combinatorics for constructing discrete minimal surfaces. For comparison, some other standard techniques for mesh processing are also available.

The program also includes some utility functions for constructing random triangulations and discrete surfaces described by immersion functions.







## Building and Running
In order to build the program, you will first need the following:
* OpenGL
* [GLEW](http://glew.sourceforge.net)
* [GLFW](http://www.glfw.org)
* [Eigen](http://eigen.tuxfamily.org/)




Once you are sure these are installed, you can build using GCC, for example, by executing:

```
g++ -std=gnu++11 -o minimal_surfaces src\minimal_surfaces.cpp src\mesh.cpp src\example_surfaces.cpp -lglfw3 -lgdi32 -lglew32  -lopengl32 -IC:\eigen-eigen\
```

## Usage


### Interface
````
Left mouse button drag   : orbit camera
Right mouse button drag  : dolly camera
f                        : compute the intrinsic Delaunay triangulation
g                        : flow to minimize the elastic energy
h                        : a time step of mean curvature flow
j                        : a time step of the Pinkall-Polthier algorithm
k                        : a time step of the Pinkall-Polthier algorithm, with Delaunay retriangulation
````

### Constructing Surfaces


The program includes functions for creating random triangulations of a disk (or a disk with holes), which can then be immersed in R^3 by a specified function. See example_surfaces.cpp for examples and details.

The Schwarz surface above, for example, was created by applying the Pinkall-Polthier algorithm to a surface constructed by first randomly triangulating a disk with 5 holes and then mapping to stereographically sphere. Here by random triangulation, we mean the Delaunay triangulation of a set of points in the disk sampled according to some distribution (in this case pushforward of the uniform distribution on the sphere).

<p align = "center">
<img width="600" src="https://github.com/LittleBadger/MinimalSurfaces/blob/master/mapping.png"> 
</p>


## Acknowledgements
This work was supported by the DFG Collaborative Research Center TRR 109 “Discretization in Geometry and Dynamics.”

## References
[1] A.I. Bobenko and B. Springborn. "A discrete Laplace-Beltrami operator for simplicial surfaces,"	Discrete Comput. Geom. 38:4 (2007) 740-756\
[2] M. Fisher, B. Springborn, P. Schröder, A. I. Bobenko. "An algorithm for the construction of intrinsic delaunay triangulations with applications to digital geometry processing." ACM SIGGRAPH 2006 Courses, 69-74\
[3] U. Pinkall, K. Polthier. Experiment. Math., Volume 2, Issue 1 (1993), 15-36.
