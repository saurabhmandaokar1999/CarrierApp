import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs';
import { UserButton } from '@clerk/nextjs';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';
import { ChevronDown, FileTextIcon, GraduationCap, GraduationCapIcon, LayoutDashboard, PenBoxIcon, StarsIcon } from 'lucide-react';

const Header = () => {
    return (
        <header className="fixed top-0 w-full border-b bg-gackground/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60">
            <nav className='container mx-auto flex justify-between items-center h-16 py-4 px-4'>
                <Link href="/">
                    <Image 
                        src="/Logo.png" 
                        alt="logo" 
                        width={200} 
                        height={60}
                        className="h-12 py-1 w-auto object-contain"
                    />
                </Link>
                <div className="flex items-center space-x-4" >
                    <SignedIn>
                        <Link href={`/dashboard`}>
                            <Button variant="outline">
                                <LayoutDashboard className="h-4 w-4"/>
                                <span className="hidden md:block">
                                Industry Insight
                                </span>
                            </Button>
                        </Link> 
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button>
                                    <StarsIcon className="h-4 w-4"/>
                                    <span className="hidden md:block">
                                        Growth Tools
                                    </span>
                                    <ChevronDown/>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem>
                                    <Link href={"/resume"} className="flex items-center gap-2">
                                        <FileTextIcon className="h-4 w-4"/>
                                        <span className="hidden md:block"> Build Resume</span>
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link href={"/ai-cover-letter"} className="flex items-center gap-2">
                                        <PenBoxIcon className="h-4 w-4"/>
                                        <span className="hidden md:block"> Cover Letter</span>
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link href={"/interview"} className="flex items-center gap-2">
                                        <GraduationCapIcon className="h-4 w-4"/>
                                        <span className="hidden md:block"> Interview Prep</span>
                                    </Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SignedIn>
                    <SignedOut>
                        <SignInButton>
                            <Button variant="outline">Sign In</Button>
                        </SignInButton>
                    </SignedOut>
                    <SignedIn>
                        <UserButton appearance={{
                            elements:{
                                avatarBox:"w-10 h-10",
                                userButtonPopoverCard:"shadow-xl",
                                userPreviewMainIdentifier:"font-semibold",
                            },
                            afterSignOutUrl: "/"
                        }}/>
                    </SignedIn>
                </div>
            </nav>
        </header>
    );
};

export default Header;