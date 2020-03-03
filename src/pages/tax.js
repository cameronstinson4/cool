import React from 'react'
import Layout from '../components/layout/layout'

const calculators = {
  "HSA": "",
  "401k": "",
  "IRA": ""
}

class TaxCalculatorPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      vehicles: {}
    };

  }
  render = () => (

    <Layout>
      <h1>Tax Calculator</h1>

      <br></br>
      <br></br>
      <br></br>


      <div>
        <label for="salary">Annual wages and tips:</label>
        <input type="number" id="salary" name="salary"></input>
      </div>

      <br></br>
      <br></br>
      <br></br>

      <h2>DISCLAIMER</h2>
      <p>
        THIS WEBSITE DOES NOT SERVE AS AN ACCOUNTANT, FUDICIARY, LAWYER OR OTHER RELATED PROFESSIONAL.
        ADDITIONALLY THIS WEBSITE IS INCORRECT, INACCURATE AND INCOMPLETE.
      </p>
      <p>
        THIS SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
        SOFTWARE.
        </p>
    </Layout>
  )
}

export default TaxCalculatorPage
