import React from 'react'
import profile from '../assets/profile.png'
import heart from '../assets/heart.png'
import shoppingbag from '../assets/shoppingbag.png'
import search from '../assets/search.png'
import { AuthContext } from '../authcontext/authcontext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Loading from '../loading&error/loading'
import Error from '../loading&error/error'

import { MegaMenu } from 'primereact/megamenu';
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    Button,
    Portal,
    Input,
    Text,
        Table,
        Thead,
        Tbody,
        Tfoot,
        Tr,
        Th,
        Td,
        TableCaption,
        TableContainer,
  } from '@chakra-ui/react';
  import { Link } from 'react-router-dom';
  import axios from 'axios';
  import { useEffect, useState } from 'react';

 
const Navbar = () => {
    const navigate = useNavigate()

    // const [user,setUser]=useState(localStorage.getItem("name"))
    const {isloding,setLoding,isError,setError,searchdata,setsearch}=useContext(AuthContext)

    const [cart,setcart]=useState([])
    let token =localStorage.getItem("token")
    const jwtPayload = token && JSON.parse(window.atob(token?.split('.')[1]));
    const expires = new Date(jwtPayload?.exp * 1000);
    const date = new Date();
    console.log("exp",expires,"--","now",date);
    
    const Navigate=useNavigate()
    useEffect(()=>{
        if(expires  <= Date.now()) {
            logout()
          }
    },[])

    const logout=()=>{
        axios.get ("https://h-m-backend.onrender.com/user/logout",{
            headers:{
                 "Authorization": `Bearer ${localStorage.getItem("token")}`
            }})
        localStorage.removeItem("token")
        localStorage.removeItem("role")
        localStorage.removeItem("name")
        localStorage.removeItem("userid")
        Navigate("/login")
    }

    if(isloding){
        return <Loading/>
    }

    if(isError){
        return <Error/>
    }
    
  
   

const items = [
    {
        label: 'Ladies',
        command: () => {
            Navigate('/ladies');
        },
        items: [
            [
                {
                    label: 'Offers',
                    items: [{label: 'Memeber'}, {label: 'Exclusive Prices'}, {label: 'Knit Happyness under  ₹1499'}]
                },
                {
                    label: 'New Arrivals',
                    items: [{label: 'View All'}, {label: 'Womens Clothing|New Arrivals'}]
                },
                {
                    label: 'Trending Now',
                    items: [{label: 'Trending Now'}]
                }
            ],
            [
                {
                    label: 'Shop by Product',
                    items: [{label: 'Viewall'}, {label: 'Tops'},
                    {label: 'Shirts & Blouses'}, {label: 'Sweaters & Hoddies'},
                    {label: 'Knitwear'}, {label: 'Sweaters & Cardigans'}, {label: 'Jackets & Coats'},
                    {label: 'Dresses'}, {label: 'Blazers & Waistcoats'}, {label: 'Jeans'},
                    {label: 'Trousers'}, {label: 'Nightwear'}, {label: 'Lingerie'},
                    {label: 'Accessories'}, {label: 'Shoes'}, {label: 'Shorts'},
                    {label: 'Skirts'}, {label: 'Basics'}, {label: 'Swimwear & Beachwear'},
                    {label: 'H&M Edition'}, {label: 'Mearch & Graphics'}, {label: 'Jumpsuits'},
                    {label: 'T-Shirts'}, {label: 'Ties'}, {label: 'Hoodies & Sweat'},
                    ]
                },
            ],
            [
                {
                    label: 'Sustainability',
                    items: [{label: 'H&M Take care'}, {label: 'Learn more'}]
                },
            ],
        ]
    },
    {
        label: 'Men',
        command: () => {
            Navigate('/men');
        },
        items: [
            [
                {
                    label: 'Offers',
                    items: [{label: 'Memeber'}, {label: 'Exclusive Prices'}, {label: 'Knit Happyness under  ₹1499'}]
                },
                {
                    label: 'New Arrivals',
                    items: [{label: 'View All'}, {label: 'Womens Clothing|New Arrivals'}]
                },
                {
                    label: 'Trending Now',
                    items: [{label: 'Trending Now'}]
                }
            ],
            [
                {
                    label: 'Shop by Product',
                    items: [{label: 'Viewall'}, {label: 'Tops'},
                    {label: 'Shirts & Blouses'}, {label: 'Sweaters & Hoddies'},
                    {label: 'Knitwear'}, {label: 'Sweaters & Cardigans'}, {label: 'Jackets & Coats'},
                    {label: 'Dresses'}, {label: 'Blazers & Waistcoats'}, {label: 'Jeans'},
                    {label: 'Trousers'}, {label: 'Nightwear'}, {label: 'Lingerie'},
                    {label: 'Accessories'}, {label: 'Shoes'}, {label: 'Shorts'},
                    {label: 'Skirts'}, {label: 'Basics'}, {label: 'Swimwear & Beachwear'},
                    {label: 'H&M Edition'}, {label: 'Mearch & Graphics'}, {label: 'Jumpsuits'},
                    {label: 'T-Shirts'}, {label: 'Ties'}, {label: 'Hoodies & Sweat'},
                    ]
                },
            ],
            [
                {
                    label: 'Sustainability',
                    items: [{label: 'H&M Take care'}, {label: 'Learn more'}]
                },
            ],
        ]
    },
    {
        label: 'Baby',
        command: () => {
            Navigate('/baby');
        },
        items: [
            [
                {
                    label: 'Member Exclusive Prices',
                    items: [{label: 'Shop now'}]
                },
                {
                    label: 'Life with Baby',
                    items: [{label: 'Guides and inspo'}]
                }
            ],
            [
                {
                    label: 'Trending Now',
                    items: [{label: 'Season essentials starting Rs.499'}, {label: 'H&M Adorables'}, {label: 'The Summer Shop 0-2y'}]
                },
                {
                    label: 'Newborn',
                    items: [{label: 'View all'}, {label: 'New Arrivals'}, {label: 'Clothing'}, {label: 'Accessories'}, {label: 'Outerwear'}]
                }
            ],
            [
                {
                    label: 'Baby Girl',
                    items: [{label: 'View all'}, {label: 'New Arrivals'}, {label: 'Clothing'}, {label: 'Outerwear'}, {label: 'Accessories'}]
                },
                {
                    label: 'Baby Boy',
                    items: [{label: 'View all'}, {label: 'New Arrivals'}, {label: 'Clothing'}, {label: 'Outerwear'}, {label: 'Accessories'}]
                }
            ],
            [
                {
                    label: 'Shop by Product',
                    items: [{label: 'View all'}, {label: 'New Arrivals'}, {label: 'Clothing'}, {label: 'Outerwear'}, {label: 'Accessories'},{label: 'Party & Occasion Sale'}]
                },
                {
                    label: 'Sustainability',
                    items: [{label: 'H&M Take care'}, {label: 'Learn more'}]
                }
            ],
            ]
    },
    {
        label: 'Kids',
        command: () => {
            Navigate('/kids');
        },
        items: [
            [
                {
                    label: 'Member Exclusive Prices',
                    items: [{label: 'Shop now'}]
                },
                {
                    label: 'Trending Now',
                    items: [{label: 'Season essentials starting Rs.399'}, {label: 'H&M Adorables'}, {label: 'Halloween Shop 0-2y'}, {label: 'The Summer Shop 0-2y'}]
                },
                {
                    label: 'Edits',
                    items: [{label: '2-3year'}, {label: '3-4year'}, {label: '4-5year'}, {label: '5-6year'}]
                }
            ],
            [
                {
                    label: 'Girls 2-8y',
                    items: [{label: 'View all'}, {label: 'New Arrivals'}, {label: 'Clothing'}, {label: 'Outerwear'}, {label: 'Accessories'},{label: 'Party & Occasion Sale'},{label: 'H&M Adorables'},{label: 'sale'}]
                }
            ],
            [
                {
                    label: 'Boys 2-8y',
                    items: [{label: 'View all'}, {label: 'New Arrivals'}, {label: 'Clothing'}, {label: 'Outerwear'}, {label: 'Accessories'},{label: 'Party & Occasion Sale'},{label: 'H&M Adorables'},{label: 'sale'}]
                },
                {
                    label: 'Girls 9-14y',
                    items: [{label: 'View all'}, {label: 'New Arrivals'}, {label: 'Clothing'}, {label: 'Outerwear'}, {label: 'Accessories'},{label: 'Party & Occasion Sale'},{label: 'H&M Adorables'},{label: 'sale'}]
                }

            ] ,
            [
                {
                    label: 'Boys 9-14y',
                    items: [{label: 'View all'}, {label: 'New Arrivals'}, {label: 'Clothing'}, {label: 'Outerwear'}, {label: 'Accessories'},{label: 'Party & Occasion Sale'},{label: 'H&M Adorables'},{label: 'sale'}]
                },
                {
                    label: 'Sustainability',
                    items: [{label: 'H&M Take care'}, {label: 'Learn more'}]
                }
            ]  
            ]
    },
    {
        label: 'H&M Home',
        command: () => {
            Navigate('/h&mhome');
        },
        items: [
            [
                {
                    label: 'Offers',
                    items: [{label: 'Member exclusive prices'}, {label: '20% off: First purchase'}, {label: 'Knit Happyness under  Rs.1499'},{label: '10% off: Shop now'},{label: 'Gifts: Under rs.1499'}]
                },
                {
                    label: 'New Arrivals',
                    items: [{label: 'New Products'}]
                },
                {
                    label: 'Shop by Room',
                    items: [{label: 'Bedrooms'}, {label: 'Living Room'}, {label: 'Bathrooms'}, {label: 'Nursery'},{label: 'Kitchen'},{label: 'Balcony'}, {label: 'Kids Room'},{label: 'Dining Room'}]
                }
            ],
            [
                {
                    label: 'Trending Now',
                    items: [{label: 'Fall collection'}, {label: 'H&M Adorables'}, {label: 'Halloween Shop 0-2y'}, {label: 'The Summer Shop 0-2y'}]

                }
            ],
            [
                {
                    label: 'Shop by Product',
                    items: [{label: 'View all'}, {label: 'New Arrivals'}, {label: 'Bed linen'}, {label: 'Cushions'}, {label: 'Decorations'}, {label: 'Sofas'},{label: 'Serving & Dining'},{label:'Bath & Shower'},{label:'Home Décor'}, {label: 'Cookware'},{label:'Sytorage'}]
                }
            ]
            [
                {
                    label: 'Sustainability',
                    items: [{label: 'H&M Take care'}, {label: 'Learn more'}]
                }
            ]

            ]
    },
    {
        label: 'Sport',
        command: () => {
            Navigate('/sport');
        },
        items: [
            [
                {
                    label: 'Member Exclusive Prices',
                    items: [{label: 'Shop now'}]
                }
            ],
            [
                {
                    label: 'Women',
                    items: [{label: 'Shop by Activity'}, {label: 'View all'}, {label: 'New Arrivals'}, {label: 'Clothing'}, {label:'Active Swimwear'},{label: 'Outerwear'}, {label: 'Accessories & Equipment'}, {label: 'maternity'}]
                }
            ],
            [
                {
                    label: 'Men',
                    items: [{label: 'Shop by Activity'}, {label: 'View all'}, {label: 'New Arrivals'}, {label: 'Clothing'}, {label: 'Outerwear'}, {label: 'Accessories & Equipment'}]
                }
            ],
            [
                {
                    label: 'Kids',
                    items: [{label: 'View all'}, {label: 'New Arrivals'}, {label: 'Girls'}, {label: 'Boys'}, {label: 'Sport Accessories'}]
                },
                {
                    label: 'Sale',
                    items: [{label: 'View all'}]
                }
            ]
            ]

    },
    {
        label: 'Sustainability',
        command: () => {
            Navigate('/sustainability');
        },
        items: [
            [
                {
                    label: 'Our Work',
                    items: [{label: "Let's innovate"}, {label: "Let's be fair"}, {label: "Let's be for all"}, {label: "Let's be transparent"}, {label: "Let's be clean up"}, {label: "Let's be close the loop"}, {label: "Let's reward our members"}]
                }
            ],
            [
                {
                    label: 'H&M Take care',
                    items: [{label: 'Wash'}, {label: 'Care'}, {label: 'Repair & remake'}, {label: 'Care Products'}]
                }
            ],
            [
                {
                    label: 'Our commitment',
                    items: [{label: 'H&M Group Sustainability Strategy'}, {label: 'H&M Group Sgustainability Report'}, {label: 'H&M Foundation'}]
                }
            ]
            ]
    }
]
 
const getcart = async () => {
    setLoding(true);
    try {
        const response = await axios.get('https://h-m-backend.onrender.com/cart', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });
        // console.log(response);
        setcart(response.data.carts);
        setLoding(false);
    } catch (error) {
        console.error(error);
        setError('Failed to fetch cart');
        setLoding(false);
    }

};
    return (
        <nav className="navbar">
            <div className="nav-container-1">
                <div className="nav-links-1">
                <p>Custermor Service</p>
                <p>Newsletter</p>
                <p>Find a store</p>
                <p>...</p>
                </div>
                <div className="nav-logo">
                    <img style={{width: "auto", height: "40px",marginLeft:"100px"}} onClick={() => Navigate('/')} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1200px-H%26M-Logo.svg.png" alt="" />
                </div>
                <div className="nav-links-2">
                    <div className="nav-links-create">
                        {(localStorage.getItem('role')=='seller'||localStorage.getItem('role')=='admin')?<Link to="/createproduct"><Text fontWeight={"bold"}>Create Product</Text></Link>:null}
                    </div>
                    <div className="nav-links-signin">
                        <img style={{width: "30px", height: "30px"}} src={profile} alt="signin" /><Popover>
                                                <PopoverTrigger>
                                                    {localStorage.getItem('token')?<Button variant={'ghost'} size='sm'><Text>{localStorage.getItem('name')}! Logout</Text></Button>:<Button variant={'ghost'} onClick={() => navigate('/login')} size='sm'>Sign in</Button>}
                                                </PopoverTrigger>
                                                <Portal>
                                                    <PopoverContent w={170}>
                                                    <PopoverBody>
                                                        {localStorage.getItem('token')?<Button colorScheme='blue' onClick={logout}>Logout</Button>:<Button colorScheme='blue' onClick={() => navigate('/login')}>Sign in</Button>}
                                                    </PopoverBody>
                                                    <PopoverFooter fontSize={14} onClick={() => navigate('/myaccount')}>My Account</PopoverFooter>
                                                    <PopoverFooter fontSize={14}>H&M Membership</PopoverFooter>
                                                    <Text padding={"10px"} fontSize={10}>Not a member yet? Join here!</Text>
                                                    </PopoverContent>
                                                </Portal>
                                                </Popover>
                    </div>
                    <div className="nav-links-favorite">
                    <img src={heart} alt="shoppingbag" /><Link to="/wishlist"><p>Favorites</p></Link>
                    </div>
                    <div className="nav-links-cart">
                    <img src={shoppingbag} alt="shoppingbag" /><Popover>
                                                <PopoverTrigger>
                                                    <Button variant={'ghost'} size='sm' onClick={()=>localStorage.getItem('token')?getcart():null} >Shopping Bag</Button>
                                                </PopoverTrigger>
                                                <Portal>
                                                    <PopoverContent w={570} margin={'auto'}>
                                                        <PopoverHeader textAlign={'center'}>Your Shopping Bag</PopoverHeader>
                                                    <PopoverBody>
                                                    
                                                    {cart.length > 0 ? cart.map((product) => {
                                                        return(
                                                        <TableContainer key={product._id}>
                                                        <Table variant='simple'>
                                                            <TableCaption>{localStorage.getItem('name')} Shopping Bag</TableCaption>
                                                            <Thead>
                                                            <Tr>
                                                                <Th>Name</Th>
                                                                <Th isNumeric>Price</Th>
                                                            </Tr>
                                                            </Thead>
                                                            <Tbody>
                                                            {product.products.map((pro) => (
                                                                <Tr key={pro._id}>
                                                                <Td>{pro.name}</Td>
                                                                <Td isNumeric>{pro.price}</Td>
                                                                </Tr>
                                                            ))}
                                                            </Tbody>
                                                            <Tfoot>
                                                            <Tr>
                                                                <Th>Total</Th>
                                                                <Th isNumeric>{product.totalCartValue}</Th>
                                                            </Tr>
                                                            </Tfoot>
                                                        </Table>
                                                        </TableContainer>
                                                    )}): <p>Your cart is empty</p>}

                                                    
                                                    </PopoverBody>
                                                    <PopoverFooter>
                                                        <Link to="/cart"><Button>View Bag</Button></Link>
                                                    </PopoverFooter>
                                                    </PopoverContent>
                                                </Portal>
                                                </Popover>
                    </div>
                </div>
            </div>
            <div className="nav-container-2">

                <div className="nav-links-blank">

                </div>

                <div className="nav-links-section">
                    <MegaMenu model={items} className='megamenu' />
                </div>

                <div className="nav-links-search">
                    <div className="nav-links-searchbar">
                        <img src={search} alt="Search" style={{width: "30px", height: "30px"}} /><Input variant='flushed' placeholder='Search' size='sm' value={searchdata} onChange={(e) => {navigate(`/products`),setsearch(e.target.value)}} />
                    </div>
                </div>

            </div>
        </nav>
    )
}

export default Navbar