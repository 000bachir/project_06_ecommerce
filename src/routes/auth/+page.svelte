<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	import Image from "$lib/assets/Images/Intro_Image_01.webp"
	import {Button} from "$lib/components/ui/button"
	import {Input} from "$lib/components/ui/input"
</script>

<!-- <main class="h-dvh w-full relative overflow-hidden grid grid-cols-2 bg-black text-white">
    <section class="h-full w-full col-span-1">
        <div class="h-full w-[95%] mx-auto flex flex-col items-center justify-center">
            <form method="POST" action="?/login" class="flex flex-col items-center">
                <label>
                  Email
                  <input name="email" type="email" />
                </label>
                <label>
                  Password
                  <input name="password" type="password" />
                </label>
                <button>Login</button>
                <button formaction="?/signup">Sign up</button>
              </form>
        </div>
    </section>
    <section class="h-full w-full col-span-1">
        
    </section>
</main> -->

<main class="relative inset-0 grid h-dvh w-full grid-cols-2 overflow-hidden">
	<section
		class="relative col-span-1 flex h-full w-full items-center justify-center overflow-hidden bg-white"
	>
		<form method="POST" action="?/login" class="flex flex-col items-center">
			<div id="box" class="relative h-[28rem] w-96 border-none bg-[#000] overflow-hidden">
				<div id="form" class="h-full w-full absolute z-10 bg-[#000] inset-[2px]  py-12 px-10 flex flex-col">
					<h2 class="auth-form-title">Sign in</h2>
					<div id="input-box" class="relative w-[18.75rem] mt-8">
						<Input placeholder="Email" type={"email"} />
						<p class="text-muted-foreground text-sm">Enter your email address.</p>
					</div>
					<div id="input-box" class="relative w-[18.75rem] mt-8">
						<Input placeholder="Password" type={'password'} />
						<p class="text-muted-foreground text-sm">Enter your email password.</p>
					</div>
					<div id="links" class="flex justify-between">
						<button class="link-1 my-2 mx-0 text-sm text-white">Forgot Password</button>
						<button class="link-2 my-2 mx-0 text-sm text-white" formaction="?/signup">Sign Up</button>
					</div>
					<Button size={'lg'}>
						Login
					</Button>
				</div>
			</div>
		</form>
	</section>

	<section class="h-full w-full relative overflow-hidden inset-0">
		<img src={Image} alt="" loading="lazy" class="w-full h-full object-cover">
	</section>
</main>

<style lang="postcss">
	#box {
		box-shadow:
			rgba(0, 0, 0, 0.25) 0px 54px 55px,
			rgba(0, 0, 0, 0.12) 0px -12px 30px,
			rgba(0, 0, 0, 0.12) 0px 4px 6px,
			rgba(0, 0, 0, 0.17) 0px 12px 13px,
			rgba(0, 0, 0, 0.09) 0px -3px 5px;
	}
	#links .link-1:hover,
	#links .link-2:hover{
		color: #45f3ff;
		transition: all 200ms ease;
	}

</style>
