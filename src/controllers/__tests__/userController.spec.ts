import { Request, Response } from 'express';
import { getUser } from '../userController'; // Adjust the import based on your folder structure
import { db } from '../../db'; // Mock your db instance here
import { usersTable } from '../../schema'; // Adjust as needed

jest.mock('../../db'); // Mock the database module

describe('getUser', () => {
    let mockRequest: Partial<Request>;
    let mockResponse: Partial<Response>;
    let json: jest.Mock;
    let status: jest.Mock;

    beforeEach(() => {
        // Create a mock response object
        json = jest.fn();
        status = jest.fn().mockReturnValue({ json });
        mockResponse = { json, status } as Partial<Response>;

        // Create a mock request object with a parameter
        mockRequest = { params: { id: '1' } } as Partial<Request>;
    });

    afterEach(() => {
        jest.clearAllMocks(); // Clear mocks after each test
    });

    it('should fetch the user and return it', async () => {
        // Arrange: Set up your mock database response
        const mockUser = { userId: '1', name: 'John Doe' };
        (db.select as jest.Mock).mockReturnValue({
            from: jest.fn().mockReturnValue({
                where: jest.fn().mockResolvedValue([mockUser]),
            }),
        });

        // Act: Call the getUser function
        await getUser(mockRequest as Request, mockResponse as Response);

        // Assert: Check that response.json was called with the correct data
        expect(json).toHaveBeenCalledWith([mockUser]);
        expect(status).not.toHaveBeenCalled(); // Ensure status was not called
    });

    it('should handle errors and return a 500 status', async () => {
        // Arrange: Set up the mock to throw an error
        (db.select as jest.Mock).mockReturnValue({
            from: jest.fn().mockReturnValue({
                where: jest.fn().mockRejectedValue(new Error('Database error')),
            }),
        });

        // Act: Call the getUser function
        await getUser(mockRequest as Request, mockResponse as Response);

        // Assert: Check that response.status and json were called correctly
        expect(status).toHaveBeenCalledWith(500);
        expect(json).toHaveBeenCalledWith({ error: 'Error fetching user' });
    });
});