<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
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

<main class="relative inset-0 grid h-dvh w-full grid-cols-2 overflow-hidden bg-black">
	<section
		class="relative col-span-1 flex h-full w-full items-center justify-center overflow-hidden"
	>
		<form method="POST" action="?/login" class="flex flex-col items-center">
			<div class="box">
				<div class="form">
					<h2>Sign in</h2>
					<div class="input-box">
						<input type="text" required />
						<span>Email</span>
						<i></i>
					</div>
					<div class="input-box">
						<input type="password" required />
						<span>password</span>
						<i></i>
					</div>
					<div class="links">
						<button>Forgot Password</button>
						<button formaction="?/signup">Sign Up</button>
					</div>
					<button class="btn">login</button>
				</div>
			</div>
		</form>
	</section>
</main>

<style lang="postcss">
	.box {
		position: relative;
		height: 420px;
		width: 380px;
		border: none;
		border-radius: 1rem;
		background: #131313;
		overflow: hidden;
		box-shadow:
			rgba(0, 0, 0, 0.25) 0px 54px 55px,
			rgba(0, 0, 0, 0.12) 0px -12px 30px,
			rgba(0, 0, 0, 0.12) 0px 4px 6px,
			rgba(0, 0, 0, 0.17) 0px 12px 13px,
			rgba(0, 0, 0, 0.09) 0px -3px 5px;
	}

	.box::before {
		content: '';
		position: absolute;
		height: 420px;
		width: 380px;
		background: linear-gradient(0deg, transparent, green, white);
		top: -50%;
		left: -50%;
		transform-origin: bottom right;
		animation: animate 6s linear infinite;
	}

	.box::after {
		content: '';
		position: absolute;
		height: 420px;
		width: 380px;
		background: linear-gradient(0deg, transparent, green, white);
		top: -50%;
		left: -50%;
		transform-origin: bottom right;
		animation: animate 15s linear ease;
		animation-delay: -3s;
		will-change: transform;
	}

	@keyframes animate {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	.form {
		position: absolute;
		z-index: 10;
		background: #28292d;
		inset: 2px;
		border-radius: 1rem;
		padding: 50px 40px;
		display: flex;
		flex-direction: column;
	}

	.form h2 {
		background: linear-gradient(to right, #8360c3, #2ebf91);
		-webkit-background-clip: text;
		-moz-background-clip: text;
		-webkit-text-fill-color: transparent;
		-moz-text-fill-color: transparent;
		text-align: center;
		letter-spacing: 0.1rem;
		font-style: italic;
		font-size: 3rem;
	}

	.input-box {
		position: relative;
		width: 300px;
		margin-top: 35px;
	}

	.input-box input {
		position: relative;
		padding: 20px 10px 10px;
		width: 100%;
		background: transparent;
		outline: none;
		border: none;
		letter-spacing: 0.05em;
		font-size: 1em;
		color: #fff;
		z-index: 10;
	}

	.input-box span {
		position: absolute;
		left: 0;
		padding: 20px 0px 10px;
		font-size: 1em;
		color: #8f8f8f;
		pointer-events: none;
		letter-spacing: 00.05em;
		transition: 0.5s;
	}

	.input-box input:valid ~ span,
	.input-box input:focus ~ span {
		color: #45f3ff;
		transform: translateX(0px) translateY(-34px);
		font-size: 0.75em;
	}

	.input-box i {
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 2px;
		background: linear-gradient(to right, #4b79a1, #283e51);
		border-radius: 4px;
		transition: 0.5s;
		pointer-events: none;
		z-index: 9;
	}

	.input-box input:valid ~ i,
	.input-box input:focus ~ i {
		height: 44px;
	}

	.links {
		display: flex;
		justify-content: space-between;
	}

	.links button {
		margin: 10px 0;
		font-size: 00.75em;
		color: #8f8f8f;
		text-decoration: none;
	}

	.links button:hover,
	.links button :nth-child(2) {
		color: #45f3ff;
		transition: all 0.5s ease;
	}

	.btn {
		border: none;
		outline: none;
		width: 80px;
		padding: 11px 25px;
		background: #45f3ff;
		border-radius: 5px;
		margin-top: 10px;
		font-weight: 600;
		cursor: pointer;
	}
</style>
