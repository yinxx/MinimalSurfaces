#version 330 core

in vData {
    vec3 pos;
    vec3 norm;
} frag;

out vec4 color;

void main()
{
	vec3 normal = normalize( -cross(dFdx(frag.pos), dFdy(frag.pos)) );
	float col = .3*normal.x + normal.y + .1*normal.z;
	color = vec4(.2*col+.8,.2*col+.8,.2*col+.9,1.0f);
}