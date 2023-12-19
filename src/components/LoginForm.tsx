import Link from "next/link";

const LoginForm = ({
  Mail,
  seMail,
  pasword,
  setPasword,
  Formulir,
  tittle,
  Erorr,
}: {
  Mail: string;
  seMail: (e: string) => void;
  pasword: string;
  setPasword: (e: string) => void;
  Formulir: any;
  Erorr: any;
  tittle: string;
}) => {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="w-1/4">
          <div className="card bg-base-100 shadow-xl">
            <form onSubmit={Formulir}>
              <div className="card-body">
                <h2 className="card-title">{tittle}</h2>
                {Erorr}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    value={Mail}
                    onChange={(e) => seMail(e.target.value)}
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="current-password"
                    required
                    minLength={8}
                    maxLength={20}
                    title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                    aria-describedby="passwordHelp"
                    placeholder="password"
                    className="input input-bordered"
                    value={pasword}
                    onChange={(e) => setPasword(e.target.value)}
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </div>
            </form>
            <div className="card-actions justify-end">
              <Link href="/register">Register</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
