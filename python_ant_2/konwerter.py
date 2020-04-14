
# tekst =  '<path id="svg_8" d="m133.114772,89.656765c0,-0.327868 1.967212,-18.36065 1.967156,-18.509245c0.000056,0.148595 10.819725,-14.933368 10.819669,-15.081962c0.000056,0.148594 21.639394,1.787938 21.639338,1.639343c0.000056,0.148595 8.524643,1.46007 14.426281,9.001052c5.901638,7.540981 14.098356,-1.967213 14.098301,-2.115808c0.000055,0.148595 15.737756,9.984658 15.737701,9.836063c0.000055,0.148595 4.590217,0.476463 4.590162,0.327869c0.000055,0.148594 3.93448,-10.343206 3.934425,-10.4918c0.000055,0.148594 4.262349,-7.064518 7.213168,0.148594c2.950819,7.213113 2.295081,15.081963 2.295026,14.933368c0.000055,0.148595 4.262349,0.804333 4.262294,0.655738c0.000055,0.148595 0.983661,13.591213 0.983606,13.442619c0.000055,0.148594 -6.229451,-2.146487 -6.229506,-2.295081c0.000055,0.148594 -5.573714,2.115807 -3.278633,6.3781c2.295082,4.262294 8.196719,12.459013 8.196664,12.310419c0.000055,0.148594 -0.655682,3.427282 -6.229451,2.443675c-5.573769,-0.983606 -12.459013,-4.590162 -12.459013,-7.213112c0,-2.62295 -4.262294,-2.62295 -4.262349,-2.771545c0.000055,0.148595 -2.950763,9.001051 -2.950818,8.852457c0.000055,0.148594 0.655792,7.033838 0.655737,6.885244c0.000055,0.148594 -10.819614,3.427282 -10.819669,3.278687c0.000055,0.148595 -7.540926,-2.146487 -7.540981,-2.295081c0.000055,0.148594 -3.606501,-4.441568 -3.606557,-4.590162c0.000056,0.148594 -7.540926,1.787937 -7.540981,1.639343c0.000055,0.148594 -18.688464,-11.326812 -18.688519,-11.475406c0.000055,0.148594 0.000055,-6.73665 0,-6.885244c-16.065514,3.427282 -27.213051,-7.720256 -27.213051,-8.048125z" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" stroke="#000" fill="#FFB27C"/>'

tekst = '\
  <path id="svg_2" d="m133.68401,83.94753c0,0 1.05263,-16.31576 0.52633,-16.5792c0.5263,0.26344 12.63154,-13.94707 12.63154,-13.94707c21.0526,-1.57895 28.94734,3.1579 34.7368,11.05262c5.78946,7.89472 13.68419,-3.15789 14.2105,-0.52632c18.42103,-0.52631 17.3684,7.89473 17.3684,7.89473c0,0 0,26.84207 -1.05263,27.36838c-1.05263,0.52632 -3.48177,12.10525 -6.31576,11.84181c3.60322,4.87882 -12.10527,8.15816 -12.63157,7.89472c0.5263,0.26344 -10,-9.21023 -10.5263,-9.47367c0.5263,0.26344 -20.46558,-7.97541 -20.99187,-11.31578c-3.40083,-3.07662 -13.21862,-3.1576 -13.74492,-3.42104c0.5263,0.26344 -14.21052,-10.78918 -14.21052,-10.78918z" stroke-width="1.5" stroke="#000" fill="#fff"/>'


tekst = tekst.replace('<path', 'svg.path(') 
tekst = tekst.replace('/>', ')') 
tekst = tekst.replace('" ', '", ') 
tekst = tekst.replace('fill-opacity', 'fill_opacity') 
tekst = tekst.replace('stroke-opacity', 'stroke_opacity') 
tekst = tekst.replace('stroke-width="1.5"', 'stroke_width=strokeWidth') 

tekst = tekst.replace('fill="#FFB27C"', 'fill=kolorFill[0]') 
tekst = tekst.replace('stroke="#000"', 'stroke=kolorStroke[0]') 



print(tekst)


