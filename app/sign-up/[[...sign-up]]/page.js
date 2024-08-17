import { SignIn, SignUp } from "@clerk/nextjs";
import { AppBar, Container, Toolbar, Typography,Button,Box } from "@mui/material";
import Link from 'next/link';


export default function SignUpPage(){
    return <Container maxWidth="100vw">
        <AppBar position ="static" >
            <Toolbar>
                <Typography variant= 'h6' sx={{
                    flexGrow: 1,
                }}
                >

                Flashcard SAAS</Typography>
                <Button color ="inherit">
                    <Link href = "/sign-in" passHref>
                        Login In
                    </Link>
                </Button>
                <Button color ="inherit">
                    <Link href = "/sign-up" passHref>
                        Sign Up
                    </Link>
                </Button>
            </Toolbar>
        </AppBar>

        <Box
            display = "flex"
            flexDirection= "column"
            alignItems ="center"
            JustifyContent = "center"
            >
                <Typography variant="h4">Sign Up</Typography>
                <SignUp/>
        </Box>
    </Container>

    
}